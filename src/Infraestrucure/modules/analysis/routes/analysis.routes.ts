import express, { Router } from 'express';
import { AnalysisControllers } from '../controllers/analysis.controllers';
import { req } from '../../../server/exceptions/http.error.exceptions';
import { authorization } from '../../../middlewares/auth.middlewares';

export default function analysisRoutes(): Router {
    const router: Router = express.Router();
    const analysis = new AnalysisControllers();

    router.post('/analysis', authorization, req(analysis.getAnalysisController));

    return router;
}
