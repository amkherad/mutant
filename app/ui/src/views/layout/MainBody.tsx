import React, { Component } from "react";
import { PipelineWidget } from "../components/PipelineWidget";


interface MainBodyProps {

}


export class MainBody extends Component<MainBodyProps> {

    constructor(props: MainBodyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <PipelineWidget/>
            </div>
        );
    }
}