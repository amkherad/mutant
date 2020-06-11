import { IModuleService } from "lib/interface/services/IModuleService";
import { RemoteService } from "./annotations/RemoteService";
import { RemoteMethod } from "./annotations/RemoteMethod";


@RemoteService({
    interfaceName: 'IModuleService',
    remoteName: 'modules'
})
export class ModuleServiceRPC implements IModuleService {
    
    [x: string]: (...args: any) => Promise<any>;
    
    @RemoteMethod()
    getModules(): Promise<string[]> {
        return Promise.resolve([]);
    }

}