import { LanguageModel } from "../models/LanguageModel";
import { ThemeModel } from "../models/ThemeModel";


export interface IEnvironmentService {

    getLanguage(): Promise<LanguageModel>;

    getTheme(): Promise<ThemeModel>;

}