import { AppLanguage } from "../enums/AppLanguage";


export interface LanguageModel {

    getLanguage(): AppLanguage;

    getDirection(): 'ltr' | 'rtl';

}