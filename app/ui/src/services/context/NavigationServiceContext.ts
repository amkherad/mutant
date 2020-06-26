import React, { Context } from "react";
import { INavigationService } from "../INavigationService";


export const NavigationServiceContext: Context<INavigationService> =
    React.createContext<INavigationService>(undefined!) as any;

export const NavigationServiceConsumer = NavigationServiceContext.Consumer;
export const NavigationServiceProvider = NavigationServiceContext.Provider;
