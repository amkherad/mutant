import { url } from "inspector";


export class RemoteServiceContext {

    private urlPattern: string;

    constructor(urlPattern: string) {
        this.urlPattern = urlPattern;
    }

    getUrlPattern(): string {
        return this.urlPattern;
    }
    
}