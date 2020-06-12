import * as ts from 'typescript';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PORT?: string;
            APP_UIPORT: string;

            REACT_APP_VERSION_INFO: string;
            REACT_APP_VERSION_SOURCE: string;
            REACT_APP_VERSION_CAMPAIGN: string;
            
            REACT_APP_SITE_TITLE: string;
            REACT_APP_SITE_NAME: string;

        }
    }
}