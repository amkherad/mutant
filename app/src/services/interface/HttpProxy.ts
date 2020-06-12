import { HttpInterface } from "./HttpInterface";

export class HttpProxy {

    private httpInterface: HttpInterface;

    constructor(httpInterface: HttpInterface) {
        this.httpInterface = httpInterface;
    }

}