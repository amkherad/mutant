import React, { Component } from 'react';
import { MainHeader } from './MainHeader';
import { initializeIcons } from '@uifabric/icons';
import { MainBody } from './MainBody';


initializeIcons();


export class MainLayout extends Component {

    async componentDidMount() {

    }

    render(): React.ReactElement {
        return (
            <div className="App" dir='rtl'>
                <MainHeader>

                </MainHeader>
                <MainBody>

                </MainBody>
            </div>
        );
    }
}