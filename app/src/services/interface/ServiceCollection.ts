import { IExposedServiceWrapper } from "../annotations/IExposedServiceWrapper";
import { HttpMethods } from 'lib/interface/HttpMethods';


interface EndpointDescriptor {

    method: HttpMethods;

    endpointName: string;

}

interface ServiceDescriptor {

    endpointName: string;

    endpoints: Record<string, EndpointDescriptor>;

}


export class ServiceCollection {

    private static services: Record<string, ServiceDescriptor> = {};


    private static getService(interfaceName: string) {

        let svc = ServiceCollection.services[interfaceName];

        if (typeof svc === 'undefined') {
            svc = {
                endpointName: interfaceName,
                endpoints: {}
            };

            ServiceCollection.services[interfaceName] = svc;
        }

        return svc;
    }


    static bindService(serviceConstructor: IExposedServiceWrapper) {

        const service = ServiceCollection.getService(serviceConstructor.name);

        const context = (serviceConstructor.prototype as IExposedServiceWrapper).getExposedServiceContext();

        service.endpointName = context.getEndpoint();

        console.log('bindService');
        console.log(context);
    }

    static bindEndpoint(
        serviceConstructor: IExposedServiceWrapper,
        method: HttpMethods,
        endpointName: string
    ) {

        const service = ServiceCollection.getService(serviceConstructor.name);

        service.endpoints[endpointName] = {
            endpointName,
            method
        } as EndpointDescriptor;

        console.log('bindEndpoint');
    }

}