import { HttpInterface } from "./HttpInterface";
import * as express from 'express';

export class UIResourceDriver {

    private uiDirName: string;

    constructor(uiDirName: string) {
        this.uiDirName = uiDirName;
    }


    configure(httpInterface: HttpInterface) {

        const app = httpInterface.getExpress();

        app.use(express.static(this.uiDirName));
        
    }

}