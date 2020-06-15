import React, { Context } from "react";
import { IModuleService } from "@mutant/interface/services/IModuleService";
import { ModuleServiceRPC } from "../ModuleServiceRPC";


export const ModulesServiceContext: Context<IModuleService> =
    React.createContext<ModuleServiceRPC>(new ModuleServiceRPC()) as any;

export const ModulesServiceConsumer = ModulesServiceContext.Consumer;
export const ModulesServiceProvider = ModulesServiceContext.Provider;
