import React, { Context } from "react";
import { IModuleService } from "@mutant/interface/services/IModuleService";
import { ModuleServiceRPC } from "../ModuleServiceRPC";


export const ModuleServiceContext: Context<IModuleService> =
    React.createContext<ModuleServiceRPC>(new ModuleServiceRPC()) as any;

export const ModuleServiceConsumer = ModuleServiceContext.Consumer;
export const ModuleServiceProvider = ModuleServiceContext.Provider;
