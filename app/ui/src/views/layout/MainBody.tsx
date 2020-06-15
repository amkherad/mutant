import React, { Component } from "react";


interface MainBodyProps {

    

}


export class MainBody extends Component<MainBodyProps> {

    constructor(props: MainBodyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}