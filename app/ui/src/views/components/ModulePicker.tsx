import React, { Component } from "react";
import { ModuleCollectionInfo } from '@mutant/interface/modules/ModuleCollectionInfo';
import { IModuleService } from "@mutant/interface/services/IModuleService";
import { GroupedList, SearchBox, IGroupedListProps, IGroup, DetailsRow, IGroupHeaderProps, IColumn, DetailsList, Selection, SelectionMode, SelectionZone } from '@fluentui/react';
import { withModuleService } from "src/services/ServiceProvider";


interface ModulePickerProps {

    moduleService: IModuleService;

}

interface ModulePickerState {

    isLoading: boolean;
    moduleCollections: ModuleCollectionInfo[];

    columns: IColumn[];

    selection: Selection;

}

class ModulePickerComponent extends Component<ModulePickerProps, ModulePickerState> {


    constructor(props: ModulePickerProps) {
        super(props);

        this.getItems = this.getItems.bind(this);
        this.getGroups = this.getGroups.bind(this);
        this.onRenderRow = this.onRenderRow.bind(this);

        this.state = {
            isLoading: true,
            moduleCollections: [],

            columns: [{
                key: 'name',
                name: 'name',
                fieldName: 'name',
                minWidth: 100
            }],
            selection: new Selection()
        };
    }

    async componentDidMount() {
        this.props.moduleService.getModules({
            page: 0,
            pageSize: 10,
            query: '',
            snapshot: ''
        }).then((value: ModuleCollectionInfo[]) => {
            console.log(value);

            this.setState({
                moduleCollections: value,
                isLoading: false
            })
        });
    }


    getItems(): any[] {
        return this.state.moduleCollections.flatMap(mi => mi.modules.map(m => ({
            name: m.name,
            key: m.name,
            fieldName: m.name,
            selectionMode: SelectionMode.none
        })).flat());
    }

    getGroups(): IGroup[] {
        return this.state.moduleCollections.map(m => ({
            name: m.name,
            count: m.modules.length,
            isSelected: true,

        } as IGroup));
    }


    onRenderRow(nestingDepth?: number, item?: any, itemIndex?: number) {
        return (
            <DetailsRow
                item={item}
                itemIndex={itemIndex ?? 0}
                columns={this.state.columns}
                selection={this.state.selection}
                selectionMode={SelectionMode.single}
                styles={{
                    root: {
                        width: '100%'
                    }
                }}
            />
        );
    }

    render() {
        return (
            <div style={{
                maxHeight: 700
            }}>
                <div>
                    <SearchBox
                        placeholder="Search"
                        onSearch={newValue => console.log('value is ' + newValue)}
                    />
                </div>
                <SelectionZone selection={this.state.selection} selectionMode={SelectionMode.multiple}>
                    <GroupedList
                        items={this.getItems()}
                        groups={this.getGroups()}
                        onRenderCell={this.onRenderRow}
                        selection={this.state.selection}
                        selectionMode={SelectionMode.single}
                    />
                </SelectionZone>
            </div>
        );
    }

}

export const ModulePicker = withModuleService(
    ModulePickerComponent
);