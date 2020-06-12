import express from 'express';
import { IExposedServiceWrapper } from '../annotations/IExposedServiceWrapper';

export class HttpInterface {

    private exp: express.Application;
    private port: number;

    constructor(port?: number) {
        this.port = port || 0;
        this.exp = express();
    }

    bindService(constructor: {
        new(...args: any): {}
    }) {
        const exposedServiceWrapper = (constructor.prototype as IExposedServiceWrapper);

        const context = exposedServiceWrapper.getExposedServiceContext();

        
    }

    listen(): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                const server = this.exp.listen(this.port, () => {

                    let port: number = this.port;
                    const address = server.address();
                    if (typeof address === 'object') {
                        port = address?.port || this.port;
                    }

                    this.port = port;

                    console.log(`HttpInterface is listening at http://localhost:${port}`);

                    resolve(port);

                });
            } catch (ex) {

                console.log(`HttpInterface failed to listen with error: ${ex}`);

                reject(ex);

            }
        });
    }

}