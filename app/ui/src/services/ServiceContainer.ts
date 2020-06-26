import "reflect-metadata";
import * as tsyringe from 'tsyringe';
import { ModuleServiceRPC } from './ModuleServiceRPC';
import { AppService } from "./AppService";
import { EnvironmentServiceRPC } from "./EnvironmentServiceRPC";

type ResolveToken = symbol | string | {
    new (...args: any[]): any;
};

export class ServiceContainer {

    static configure(baseApiUrl: string) {

        tsyringe.container.register<AppService>(AppService, {useValue: new AppService(baseApiUrl)});
        tsyringe.container.register<ModuleServiceRPC>("IModuleService", {useClass: ModuleServiceRPC});
        tsyringe.container.register<EnvironmentServiceRPC>("IEnvironmentService", {useClass: EnvironmentServiceRPC});
        
    }

    static resolve<T>(type: ResolveToken) {

        return tsyringe.container.resolve<T>(type);

    }

}