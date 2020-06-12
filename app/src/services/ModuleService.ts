import { IModuleService } from "interface/services/IModuleService";
import { ExposeService } from "./annotations/ExposeService";
import { ExposeMethod } from "./annotations/ExposeMethod";

@ExposeService({
    interfaceName: 'IModuleService'
})
export class ModuleService implements IModuleService {

    [x: string]: (...args: any) => Promise<any>;
    
    @ExposeMethod()
    async getModules(): Promise<string[]> {
        return [
            'hello',
            'test'
        ];
    }
    
}