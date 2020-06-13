/// <reference types="react-scripts" />

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_API_DEVMODE?: string;

            REACT_APP_VERSION_INFO: string;
            REACT_APP_VERSION_SOURCE: string;
            REACT_APP_VERSION_CAMPAIGN: string;
            
            REACT_APP_SITE_TITLE: string;
            REACT_APP_SITE_NAME: string;

        }
    }
}