import React from 'react';
import { BasicProps } from "src/views/BasicProps";


interface LoadingWrapperProps extends BasicProps {

    

}

export function LoadingWrapper(props: LoadingWrapperProps) {

    return (
        <div>
            {props.children}
        </div>
    );

}