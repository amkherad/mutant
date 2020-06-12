import { ExposedServiceContext } from "./ExposedServiceContext";


export interface IExposedServiceWrapper {

    new(...args: any): {};

    getExposedServiceContext(): ExposedServiceContext;

}