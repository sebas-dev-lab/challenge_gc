import { ConfigConnectionInterface } from '../interfaces/http.interfaces';
import { HttpMainRoutes } from '../routes/http.main.routes';

export class AnalysisServerConfig implements ConfigConnectionInterface {
    port: number;
    routes: HttpMainRoutes;

    constructor(port: number, Routes: HttpMainRoutes) {
        this.port = port;
        this.routes = Routes;
    }

    middlewares(): void {
        console.log('Nothing to execute.');
    }
}
