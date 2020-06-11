

export interface ExposeServiceProps {

    interfaceName: string;
    serviceName?: string;

}


export const ExposeService = (props: ExposeServiceProps): ClassDecorator => {

    return (constructor: Function) => {

    }
};