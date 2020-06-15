import React, { Context } from "react";
import { IEnvironmentService } from "@mutant/interface/services/IEnvironmentService";
import { EnvironmentServiceRPC } from "../EnvironmentServiceRPC";


export const EnvironmentServiceContext: Context<IEnvironmentService> =
    React.createContext<EnvironmentServiceRPC>(new EnvironmentServiceRPC()) as any;

export const EnvironmentServiceConsumer = EnvironmentServiceContext.Consumer;
export const EnvironmentServiceProvider = EnvironmentServiceContext.Provider;
