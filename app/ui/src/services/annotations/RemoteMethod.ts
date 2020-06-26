import { IRemoteServiceWrapper } from "./IRemoteServiceWrapper";
import { IService } from "@mutant/interface/services/IService";
import { HttpMethods } from "@mutant/interface/HttpMethods";
import { ServiceContainer } from "../ServiceContainer";
import { AppService } from "../AppService";
import {BaseResponseDto} from "@mutant/interface/models/BaseResponseDto";


interface RemoteMethodProps {

    method?: HttpMethods;

    endpointName?: string;

}


function remoteMethod (instance: IService, methodName: string, props?: RemoteMethodProps) : (...args: any) => Promise<any> {

    const method = props?.method || 'POST';
    const endpointName = props?.endpointName || methodName;

    return async function (this: IRemoteServiceWrapper, ...args: any): Promise<any> {

        if (process.env.REACT_APP_API_DEVMODE === '1') {
            return;
        }

        const context = this.getRemoteServiceContext();

        const appService = ServiceContainer.resolve<AppService>(AppService);

        const apiBaseUrl = appService.getApiBaseUrl();

        const url = `${apiBaseUrl}/${context.getUrlPattern()}/${endpointName}`;

        const headers: Record<string, string> = {};

        const body = typeof args !== 'undefined' && args.length > 0 ? JSON.stringify(args) : undefined;
        if (typeof body !== 'undefined') {
            headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, {
            body: body,
            headers: headers,
            method: method.toString(),
        });

        if (!response.ok) {
            throw new Error(`An error occured in remote method, status: ${response.status}, statusText: ${response.statusText}`);
        }

        const responseText = await response.text();

        if (!responseText && responseText === '') {
            return {};
        }

        let json : BaseResponseDto<any>;

        try {
            json = JSON.parse(responseText);
        } catch(ex) {
            console.log('method:', methodName, 'exception:', ex, 'response:', responseText);
            
            throw new Error(`Error in '${methodName}()', status: ${response.status}, statusText: ${response.statusText}, url: ${url}`);
        }

        if (json.status !== 'success') {
            throw new Error(`Error in '${methodName}()', message: ${json.message}, url: ${url}`);
        }

        return json.result;
    };
}


export function RemoteMethod (props?: RemoteMethodProps): MethodDecorator {

    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {

        return {
            ...descriptor,
            value: remoteMethod(target as any, propertyKey.toString(), props)
        } as TypedPropertyDescriptor<any>;
    }
}