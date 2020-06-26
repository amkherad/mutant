import { IService } from './IService';
import { QueryFilterDto } from '../models/QueryFilterDto';
import { ModuleCollectionInfo } from '../modules/ModuleCollectionInfo';

export interface GetModulesQueryFilter extends QueryFilterDto {

    query?: string;

}

export interface IModuleService extends IService {

    getModules(filter: GetModulesQueryFilter): Promise<ModuleCollectionInfo[]>;

}