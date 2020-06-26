import React, { FunctionComponent } from "react";
import {PipelineItemDto} from '@mutant/interface/pipeline/PipelineItemDto';


interface PipelineItemProps {

    item: PipelineItemDto;

}


export const PipelineItem : FunctionComponent<PipelineItemProps> = (props: PipelineItemProps) => {

    return (
        <div>
            {props.item.moduleName}
        </div>
    );

}