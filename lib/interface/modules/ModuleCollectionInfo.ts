import { ModuleInfo } from "./ModuleInfo";


export interface ModuleCollectionInfo {

    moduleHash: string;

    name: string;
    keywords: string[];

    description: string;

    author: string;
    projectLink: string;
    documentLink: string;

 
    modules: ModuleInfo[];

    
}