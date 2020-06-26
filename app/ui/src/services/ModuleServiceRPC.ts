import { IModuleService, GetModulesQueryFilter } from "@mutant/interface/services/IModuleService";
import { RemoteService } from "./annotations/RemoteService";
import { RemoteMethod } from "./annotations/RemoteMethod";
import { ModuleCollectionInfo } from "@mutant/interface/modules/ModuleCollectionInfo";


@RemoteService({
    interfaceName: 'IModuleService',
    remoteName: 'modules'
})
export class ModuleServiceRPC implements IModuleService {
    
    [x: string]: (...args: any) => Promise<any>;
    
    @RemoteMethod()
    getModules(filter: GetModulesQueryFilter): Promise<ModuleCollectionInfo[]> {
        throw new Error('Not supoprted.');
    }

}