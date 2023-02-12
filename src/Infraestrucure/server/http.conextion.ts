import express, { Express, NextFunction, Request, Response } from 'express';
import { ConfigConnectionInterface, HttpConnectionInterface } from '../interfaces/http.interfaces';
import { HttpMainRoutes } from '../routes/http.main.routes';
import morgan from 'morgan';

export class HttpConection implements HttpConnectionInterface {
    private server: Express;
    private callback?: (n?: unknown) => void;
    routes: HttpMainRoutes;
    port: number;

    confgMiddlewares: (() => void) | undefined;

    constructor(configs: ConfigConnectionInterface, cb?: (n?: unknown) => void) {
        this.server = express();
        this.port = configs.port;
        this.routes = configs.routes;
        this.confgMiddlewares = configs.middlewares;
        this.callback = cb;
    }

    middlewares(): void {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(morgan('dev'));
        if (this.confgMiddlewares) this.confgMiddlewares;
    }

    start(): void {
        this.middlewares();

        if (this.callback) this.callback();

        // ================== GENERIC ROUTES ================= //
        this.server.use('/api', this.routes.index());

        // ================== ERROR HANDLER ================= //
        this.server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(409).send(err.message);
        });

        this.server.listen(this.port, () => {
            console.log(`Server on port: ${this.port}`);
            console.log(`Context created: ${context.get_context_id()}`);
        });
        global.saltRound = 8;
    }
}
