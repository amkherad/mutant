import "reflect-metadata";
import * as tsyringe from 'tsyringe';
import { ModuleService } from './ModuleService';

type ResolveToken = symbol | string | {
    new (...args: any[]): any;
};

export class ServiceContainer {

    static configure() {

        tsyringe.container.register<ModuleService>("IModuleService", {useValue: new ModuleService()});
        
    }

    static resolve<T>(type: ResolveToken) {

        return tsyringe.container.resolve<T>(type);

    }


}