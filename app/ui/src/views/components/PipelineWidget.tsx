import React, { Component } from "react";
import { PipelineItem } from "./PipelineItem";
import { PipelineDto } from "@mutant/interface/pipeline/PipelineDto";
import { Button, IconButton, Icon } from "@fluentui/react";
import { ModulePickerButton } from "./ModulePickerButton";


interface PipelineWidgetProps {



}

interface PipelineWidgetState {

    pipeline: PipelineDto;

}


export class PipelineWidget extends Component<PipelineWidgetProps, PipelineWidgetState> {

    constructor(props: PipelineWidgetProps) {
        super(props);

        this.state = {
            pipeline: {
                items: [
                    {
                        moduleName: 'test',
                        name: 'test'
                    },
                    {
                        moduleName: 'test1',
                        name: 'test1'
                    },
                    {
                        moduleName: 'test2',
                        name: 'test2'
                    },
                    {
                        moduleName: 'test3',
                        name: 'test3'
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.pipeline.items.map((item, index) => (
                        <PipelineItem
                            item={item}
                        />
                    ))
                }

                <div>
                    {/* <Button>
                        <Icon iconName='Add' />
                        Add
                    </Button> */}
                    <ModulePickerButton />
                </div>

            </div>
        );
    }

}