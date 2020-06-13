import React, { FunctionComponent } from "react";


interface PipelineItemProps {

    displayName: string;

}


export const PipelineItem : FunctionComponent<PipelineItemProps> = (props: PipelineItemProps) => {

    return (
        <div>
            {props.displayName}
        </div>
    );

}