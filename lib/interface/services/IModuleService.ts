import { IService } from './IService';

export interface IModuleService extends IService {

    getModules(): Promise<string[]>;

}