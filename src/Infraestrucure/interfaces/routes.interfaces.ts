import { Router, Request } from 'express';
import { responseType } from '../../common/types.common';
import { InputType } from '../../core/modules/analysis/input.core';
import { OutputLoads } from '../../core/modules/analysis/output.core';
import { authToken, authUsers, credentials } from '../../core/modules/auth/credentials.auth';

// ============== HTTP INTERFACES ================ //
export interface HttpRoutesInterface {
  router: Router
  index(): Router
}

export interface TypedRequestBody<T> extends Request {
  body: T
}


// ============== ANAYLISIS INTERFACES ================ //
export interface AnalysisRoutesInterface {
  loadAnalysis(data: InputType): OutputLoads
}

export interface AnalysisServicesInterface {
  getAnalysis(data: InputType): OutputLoads| boolean
}

export interface AnalysisCasesInterface {
  calcEntry(data: InputType): OutputLoads
}

// ============== AUTH INTERFACES ================ //
export interface AuthCasesInterface {
  register(data: credentials): Promise<authUsers | boolean>;
  login(data: credentials): Promise<authToken | boolean>;
  logout(data: authToken): boolean;
}

export interface AuthServicesInterface {
  register(data: credentials): Promise<responseType>;
  login(data: credentials): Promise<responseType>;
  logout(data: authToken): responseType;
}

