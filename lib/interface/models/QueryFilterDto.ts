import {DateTime} from './DateTime';

export interface QueryFilterDto {

    snapshot?: DateTime;

    page: number;
    pageSize: number;

}