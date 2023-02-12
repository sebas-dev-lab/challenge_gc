/* eslint-disable no-var */

import { ContextInterface } from './context.interface';

declare global {
  var context: ContextInterface;
  var saltRound: number;
}


declare global {
  namespace Express {
    export interface Request {
      authContext?: {
        id: string
      }
    }
  }
}
export {};
