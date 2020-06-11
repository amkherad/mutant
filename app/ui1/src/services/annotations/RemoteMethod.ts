import { IRemoteServiceWrapper } from "./IRemoteServiceWrapper";
import { IService } from "lib/interface/services/IService";
import { ServiceContainer } from "../ServiceContainer";
import { AppService } from "../AppService";

interface RemoteMethodProps {

    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'OPTIONS';

    endpointName?: string;

}


const remoteMethod = (instance: IService, methodName: string, props?: RemoteMethodProps) : () => Promise<any> => {

    const method = props?.method || 'GET';
    const endpointName = props?.endpointName || methodName;

    return async function (this: IRemoteServiceWrapper, ...args: any): Promise<any> {

        const context = this.getRemoteServiceContext();

        const appService = ServiceContainer.resolve<AppService>(AppService);

        const apiBaseUrl = appService.getApiBaseUrl();

        const url = `${apiBaseUrl}/${context.getUrlPattern()}/${endpointName}`;

        console.log(url);

        const response = await fetch(url, {
            method,
        });

        if (!response.ok) {
            throw new Error(`An error occured in remote method, status: ${response.status}, statusText: ${response.statusText}`);
        }

        const responseText = await response.text();

        if (!responseText && responseText === '') {
            return {};
        }

        let json : any;

        try {
            json = JSON.parse(responseText);
        } catch(ex) {
            console.log('method:', methodName, 'exception:', ex, 'response:', responseText);
            
            throw new Error(`Error in '${methodName}()', status: ${response.status}, statusText: ${response.statusText}, url: ${url}`);
        }

        return json;
    };
}


export const RemoteMethod = (props?: RemoteMethodProps): MethodDecorator => {

    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {

        return {
            ...descriptor,
            value: remoteMethod(target as any, propertyKey.toString(), props)
        } as TypedPropertyDescriptor<any>;
    }
}