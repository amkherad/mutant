import React, { Component } from "react";
import { PipelineModel } from "src/models/PipelineModel";
import { PipelineItem } from "./PipelineItem";


interface PipelineWidgetProps {



}

interface PipelineWidgetState {

    pipeline: PipelineModel;

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
                            displayName={item.name}
                        />
                    ))
                }
            </div>
        );
    }

}