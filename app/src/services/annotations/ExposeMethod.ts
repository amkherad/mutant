

export interface ExposeMethodProps {

    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'OPTIONS';

    endpointName?: string;

}


export const ExposeMethod = (props?: ExposeMethodProps): MethodDecorator => {

    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {

    }
}