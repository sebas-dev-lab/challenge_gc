import { HttpMainRoutes } from '../routes/http.main.routes';

export interface ConfigConnectionInterface {
  port: number
  routes: HttpMainRoutes
  middlewares(): void
}

export interface HttpConnectionInterface extends ConfigConnectionInterface{
  start(): void
}


