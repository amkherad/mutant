import express, { IRouterMatcher } from 'express';
import cors from 'cors';
import { HttpMethods } from '@mutant/interface/HttpMethods';
import bodyParser from 'body-parser';


export class HttpInterface {

    private exp: express.Application;
    private port: number;

    constructor(port?: number) {
        this.port = port || 0;
        this.exp = express();

        this.exp.use(bodyParser.json({
            type: 'application/json'
        }));
    }

    allowAllCors() {
        this.exp.use(cors());
    }

    getExpress(): express.Application {
        return this.exp;
    }

    registerHandlerByMethod(method: HttpMethods, path: string, handler: any) {
        switch (method) {
            case 'GET': {
                this.exp.get(path, handler);
                break;
            }
            case 'PATCH': {
                this.exp.patch(path, handler);
                break;
            }
            case 'PUT': {
                this.exp.put(path, handler);
                break;
            }
            case 'DELETE': {
                this.exp.delete(path, handler);
                break;
            }
            case 'OPTIONS': {
                this.exp.options(path, handler);
                break;
            }
            case 'POST':
            default: {
                this.exp.post(path, handler);
                break;
            }
        }
    }

    addEndpoint(
        handler: (req: express.Request, res: express.Response) => void | Promise<any>,
        path: string,
        method: HttpMethods = 'POST') {

        this.registerHandlerByMethod(method, path, handler as any);

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