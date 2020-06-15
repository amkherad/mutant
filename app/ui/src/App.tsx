import React, { Component } from 'react';
import { MainLayout } from './views/layout/MainLayout';
import { EnvironmentServiceProvider } from './services/context/EnvironmentServiceContext';
import { IEnvironmentService } from '@mutant/interface/services/IEnvironmentService';
import { EnvironmentServiceRPC } from './services/EnvironmentServiceRPC';

import './App.css';


interface AppProps {

}

interface AppState {

    environmentService: IEnvironmentService;

}

class App extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            environmentService: new EnvironmentServiceRPC()
        };
    }

    render() {
        return (
            <EnvironmentServiceProvider value={this.state.environmentService}>
                <MainLayout>

                </MainLayout>
            </EnvironmentServiceProvider>
        );
    }
}

export default App;
