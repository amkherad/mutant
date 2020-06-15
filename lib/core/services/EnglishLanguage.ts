import { LanguageModel } from '@mutant/interface/models/LanguageModel';
import { AppLanguage } from '@mutant/interface/enums/AppLanguage';

export class EnglishLanguage implements LanguageModel {

    getLanguage(): AppLanguage {
        return AppLanguage.English;
    }

    getDirection(): "ltr" | "rtl" {
        return "ltr";
    }

    

}