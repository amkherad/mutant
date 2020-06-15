import { ServiceCollection } from "../interface/ServiceCollection"
import { IExposedServiceWrapper } from "./IExposedServiceWrapper";
import { HttpMethods } from "@mutant/interface/HttpMethods";


export interface ExposeMethodProps {

    method?: HttpMethods;

    endpointName?: string;

}


export function ExposeMethod (props?: ExposeMethodProps): MethodDecorator {

    const method = props?.method || 'POST';

    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {

        ServiceCollection.bindEndpoint(
            target.constructor as IExposedServiceWrapper,
            method,
            propertyKey.toString()
        );

    }
}