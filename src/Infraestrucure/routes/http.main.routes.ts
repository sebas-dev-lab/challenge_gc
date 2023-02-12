import express, { Router } from 'express';
import { HttpRoutesInterface } from '../interfaces/routes.interfaces';
import analysisRoutes from '../modules/analysis/routes/analysis.routes';
import authRoutes from '../modules/auth/routes/auth.routes';
import * as path from 'path';

export class HttpMainRoutes implements HttpRoutesInterface {
    public router: Router;
    constructor() {
        this.router = express.Router();
    }

    public index(): Router {
    // ========== ANLAYSIS ROUTES =========== //
        this.router.use(analysisRoutes());
        // ========== AUTH ROUTES =========== //
        this.router.use('/auth', authRoutes());

        // ========== YOU CAN SEE THE LAST REPORT ON http://localhost:<port>/api/test_view =========== //
        this.router.get('/test_view', function (req, res) {
            res.sendFile(path.join(__dirname, '../../test_newman/report.html'));
        });

        return this.router;
    }
}
