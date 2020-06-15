import { RemoteServiceContext } from "./RemoteServiceContext";
import { IRemoteServiceWrapper } from "./IRemoteServiceWrapper";


export interface RemoteServiceProps {

    interfaceName: string;
    remoteName?: string;

}


export function RemoteService (props: RemoteServiceProps): ClassDecorator {

    const context = new RemoteServiceContext(props.interfaceName);

    return (constructor: Function) => {

        (constructor.prototype as IRemoteServiceWrapper).getRemoteServiceContext = () => {
            return context;
        };
        
    }
}