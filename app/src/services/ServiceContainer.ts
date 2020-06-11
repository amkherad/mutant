import "reflect-metadata";
import * as tsyringe from 'tsyringe';
import { ModuleService } from './ModuleService';


export class ServiceContainer {

    static configure() {

        tsyringe.container.register<ModuleService>("IModuleService", {useValue: new ModuleService()});
        
    }

}