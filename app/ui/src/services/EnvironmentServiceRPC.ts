import { IEnvironmentService } from "@mutant/interface/services/IEnvironmentService";
import { RemoteService } from "./annotations/RemoteService";
import { RemoteMethod } from "./annotations/RemoteMethod";
import { LanguageModel } from "@mutant/interface/models/LanguageModel";
import { ThemeModel } from "@mutant/interface/models/ThemeModel";


@RemoteService({
    interfaceName: 'IEnvironmentService',
    remoteName: 'environment'
})
export class EnvironmentServiceRPC implements IEnvironmentService {
    [x: string]: (...args: any) => Promise<any>;
    
    @RemoteMethod()
    async getLanguage(): Promise<LanguageModel> {
        return {
            getDirection: () => {
                return 'ltr';
            },
            getLanguage: () => {
                return 'english';
            },
        };
    }

    @RemoteMethod()
    async getTheme(): Promise<ThemeModel> {
        return {

        };
    }
    
}
