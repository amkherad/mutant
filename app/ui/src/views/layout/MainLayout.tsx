import React, { Component, ReactNode } from 'react';
import { MainHeader } from './MainHeader';
import { initializeIcons } from '@uifabric/icons';
import { MainBody } from './MainBody';
import { EnvironmentServiceContext } from 'src/services/context/EnvironmentServiceContext';
import { LanguageModel } from '@mutant/interface/models/LanguageModel';
import { NavigationServiceContext, NavigationServiceProvider } from 'src/services/context/NavigationServiceContext';
import { INavigationService } from 'src/services/INavigationService';
import { HomePage } from '../home/HomePage';


initializeIcons();


interface MainLayoutProps {



}

interface MainLayoutState {

    currentScreen: ReactNode;

}

class NavService implements INavigationService {
    constructor() {

    }


}

export class MainLayout extends Component<MainLayoutProps, MainLayoutState> {

    static contextType = EnvironmentServiceContext;
    //declare context: React.ContextType<typeof EnvironmentServiceContext>

    private language?: LanguageModel;

    private navService: NavService;


    constructor(props: MainLayoutProps) {
        super(props);

        this.navService = new NavService();

        this.state = {
            currentScreen: (<HomePage/>)
        };
    }

    async componentDidMount() {
        this.language = await this.context.getLanguage();

    }

    render(): React.ReactElement {
        return (
            <div className="App" dir={this.language?.getDirection() || 'ltr'}>
                <NavigationServiceProvider value={this.navService}>
                    <MainHeader>

                    </MainHeader>
                    <MainBody>
                        {this.state.currentScreen}
                    </MainBody>
                </NavigationServiceProvider>
            </div>
        );
    }
}