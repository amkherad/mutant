import { IEnvironmentService } from "interface/services/IEnvironmentService";
import { ExposeService } from "./annotations/ExposeService";
import { ExposeMethod } from "./annotations/ExposeMethod";
import { LanguageModel } from "@mutant/interface/models/LanguageModel";
import { ThemeModel } from "@mutant/interface/models/ThemeModel";

@ExposeService({
    interfaceName: 'IEnvironmentService',
})
export class EnvironmentService implements IEnvironmentService {

    [x: string]: (...args: any) => Promise<any>;
    
    @ExposeMethod()
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

    @ExposeMethod()
    async getTheme(): Promise<ThemeModel> {
        return {

        };
    }
    
}