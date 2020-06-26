import React, { ComponentClass, useContext } from "react";
import { INavigationService } from "./INavigationService";
import { IModuleService } from "@mutant/interface/services/IModuleService";
import { ModuleServiceContext } from "./context/ModuleServiceContext";
import { NavigationServiceContext } from "./context/NavigationServiceContext";
import { BasicProps } from "src/views/BasicProps";


export interface NavigationServiceProps {
    navigationService: INavigationService;
}

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type Subtract<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
type WithServiceProps<P, T> = Subtract<P, T> & BasicProps;

export const withNavigationService = <P extends NavigationServiceProps, S = any>(component: ComponentClass<P, S>) => {

    const Component = component;

    return (props: WithServiceProps<P, NavigationServiceProps>) => {
        
        const navigationService = useContext<INavigationService>(NavigationServiceContext);
        
        return (
            <Component
                {...props as any}
                navigationService={navigationService}
            />
        );
    };
};


export interface ModuleServiceProps {
    moduleService: IModuleService;
}

export function withModuleService <P extends ModuleServiceProps, S = any>(component: ComponentClass<P, S>) {

    const Component = component;

    return (props: WithServiceProps<P, ModuleServiceProps>) => {

        const moduleService = useContext<IModuleService>(ModuleServiceContext);
        
        return (
            <Component
                {...props as any}
                moduleService={moduleService}
            />
        );
    };
};