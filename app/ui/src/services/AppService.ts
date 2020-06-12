import { injectable } from "tsyringe";

@injectable()
export class AppService {

    private apiBaseUrl: string;

    constructor(apiBaseUrl: string) {
        this.apiBaseUrl = apiBaseUrl;
    }


    getApiBaseUrl(): string {
        return this.apiBaseUrl;
    }

}