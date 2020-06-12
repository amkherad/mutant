import { ServiceCollection } from "../interface/ServiceCollection"
import { IExposedServiceWrapper } from "./IExposedServiceWrapper";
import { HttpMethods } from "../../lib/interface/HttpMethods";


export interface ExposeMethodProps {

    method?: HttpMethods;

    endpointName?: string;

}


export const ExposeMethod = (props?: ExposeMethodProps): MethodDecorator => {

    const method = props?.method || HttpMethods.GET;

    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {

        ServiceCollection.bindEndpoint(
            target.constructor as IExposedServiceWrapper,
            method,
            propertyKey.toString()
        );

    }
}