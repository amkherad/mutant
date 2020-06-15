import { ServiceCollection } from "../interface/ServiceCollection";
import { IExposedServiceWrapper } from "./IExposedServiceWrapper";
import { ExposedServiceContext } from "./ExposedServiceContext";


export interface ExposeServiceProps {

    interfaceName: string;
    serviceName?: string;

}


export function ExposeService (props: ExposeServiceProps): ClassDecorator {

    const endpointName = props.serviceName || props.interfaceName;
    const context = new ExposedServiceContext(endpointName);

    return (constructor: Function) => {

        const proto = (constructor as IExposedServiceWrapper);

        proto.prototype.getExposedServiceContext = () => {
            return context
        };

        ServiceCollection.bindService(proto);
    }
};