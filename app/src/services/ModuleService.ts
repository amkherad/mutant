import { IModuleService, GetModulesQueryFilter } from "interface/services/IModuleService";
import { ExposeService } from "./annotations/ExposeService";
import { ExposeMethod } from "./annotations/ExposeMethod";
import { ModuleCollectionInfo } from "@mutant/interface/modules/ModuleCollectionInfo";

@ExposeService({
    interfaceName: 'IModuleService'
})
export class ModuleService implements IModuleService {

    [x: string]: (...args: any) => Promise<any>;
    
    @ExposeMethod()
    async getModules(filter: GetModulesQueryFilter): Promise<ModuleCollectionInfo[]> {
        return [
            {
                moduleHash: 'hkgdjy6gfl',
                name: 'test',
                author: 'test',
                description: 'test',
                documentLink: 'test',
                keywords: ['test'],
                modules: [{
                    name: 'test',
                    description: 'test',
                }],
                projectLink: 'test',
            }
        ];
    }
    
}