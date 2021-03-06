import { IExposedServiceWrapper } from "../annotations/IExposedServiceWrapper";
import { HttpMethods } from '@mutant/interface/HttpMethods';
import { HttpInterface } from "./HttpInterface";
import { ServiceContainer } from "../ServiceContainer";
import * as express from 'express';
import { IService } from "@mutant/interface/services/IService";
import {BaseResponseDto} from "@mutant/interface/models/BaseResponseDto";


interface EndpointDescriptor {

    method: HttpMethods;

    endpointName: string;

}

interface ServiceDescriptor {

    ctor?: new (...args: any) => {};

    endpointName: string;

    endpoints: Record<string, EndpointDescriptor>;

}


function isEmpty(obj: any) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
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

    static async handleRequest(req: express.Request, res: express.Response): Promise<any> {
        try {
            console.log(`Service endpoint was called: ${req.method} ${req.url}`);

            const urlParts = req.url.split('/');
            const serviceName = urlParts[2];
            const methodName = urlParts[3];

            console.log(`   ---- Request to ${serviceName}.${methodName}()`);

            let service: ServiceDescriptor | undefined = undefined;

            for (const serviceKey in ServiceCollection.services) {
                if (ServiceCollection.services.hasOwnProperty(serviceKey)) {
                    const element = ServiceCollection.services[serviceKey];

                    if (element.endpointName == serviceName) {
                        service = element;
                    }
                }
            }

            if (typeof service === 'undefined') {
                throw new Error(`Requested service could not be found, serviceName: ${serviceName}, methodName: ${methodName}`);
            }

            if (typeof service.ctor === 'undefined') {
                throw new Error('Invalid state, ctor is undefined.');
            }

            const body = req.body;

            const instance = ServiceContainer.resolve<IService>(service.ctor);

            const method = instance[methodName];

            let response: any;
            if (typeof body === 'undefined' || isEmpty(body)) {
                response = await method();
            } else {
                response = await method(...body);
            }

            res.setHeader('Content-Type', 'application/json');
            res.send({
                status: 'success',
                result: response
            } as BaseResponseDto<any>);

        } catch (err) {

            res.setHeader('Content-Type', 'application/json');
            res.send({
                status: 'error',
                message: err?.toString()
            } as BaseResponseDto<any>);
            
        }

    }

    static addEndpoints(httpInterface: HttpInterface) {

        for (const serviceKey in ServiceCollection.services) {
            if (ServiceCollection.services.hasOwnProperty(serviceKey)) {
                const service = ServiceCollection.services[serviceKey];

                for (const endpointKey in service.endpoints) {
                    if (service.endpoints.hasOwnProperty(endpointKey)) {
                        const endpiont = service.endpoints[endpointKey];

                        httpInterface.addEndpoint(
                            ServiceCollection.handleRequest,
                            `/api/${service.endpointName}/${endpiont.endpointName}`,
                            endpiont.method
                        );
                    }
                }
            }
        }

    }


    static bindService(serviceConstructor: IExposedServiceWrapper) {

        const service = ServiceCollection.getService(serviceConstructor.name);

        const context = (serviceConstructor.prototype as IExposedServiceWrapper).getExposedServiceContext();

        service.ctor = serviceConstructor;
        service.endpointName = context.getEndpoint();

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

    }

}