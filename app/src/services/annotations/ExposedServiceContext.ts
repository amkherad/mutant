

export class ExposedServiceContext {

    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }


    getEndpoint(): string {
        return this.endpoint;
    }

}