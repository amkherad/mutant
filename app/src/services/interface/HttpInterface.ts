import express, { IRouterMatcher } from 'express';
import { HttpMethods } from 'lib/interface/HttpMethods';

export class HttpInterface {

    private exp: express.Application;
    private port: number;

    constructor(port?: number) {
        this.port = port || 0;
        this.exp = express();
    }

    registerHandlerByMethod(method: HttpMethods, directory: string, handler: any) {
        switch (method) {
            case 'GET': {
                this.exp.get(directory, handler);
                break;
            }
            case 'PATCH': {
                this.exp.patch(directory, handler);
                break;
            }
            case 'PUT': {
                this.exp.put(directory, handler);
                break;
            }
            case 'DELETE': {
                this.exp.delete(directory, handler);
                break;
            }
            case 'OPTIONS': {
                this.exp.options(directory, handler);
                break;
            }
            case 'POST':
            default: {
                this.exp.post(directory, handler);
                break;
            }
        }
    }

    addEndpoint(
        handler: (req: express.Request, res: express.Response) => void | Promise<any>,
        directory: string,
        method: HttpMethods = 'POST') {

        this.registerHandlerByMethod(method, directory, handler as any);

    }

    listen(): Promise<number> {

        this.exp.get('/', (req, res) => {
            res.send('hello');
        });

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