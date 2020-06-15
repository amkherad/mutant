import React, {Context} from "react";
import { IEnvironmentService } from "@mutant/interface/services/IEnvironmentService";
import { RemoteService } from "./annotations/RemoteService";
import { RemoteMethod } from "./annotations/RemoteMethod";
import { LanguageModel } from "@mutant/interface/models/LanguageModel";
import { ThemeModel } from "@mutant/interface/models/ThemeModel";


@RemoteService({
    interfaceName: 'IModuleService',
    remoteName: 'modules'
})
export class EnvironmentServiceRPC implements IEnvironmentService {
    [x: string]: (...args: any) => Promise<any>;
    
    @RemoteMethod()
    getLanguage(): Promise<LanguageModel> {
        throw new Error("Method not implemented.");
    }

    @RemoteMethod()
    getTheme(): Promise<ThemeModel> {
        throw new Error("Method not implemented.");
    }
    
}
