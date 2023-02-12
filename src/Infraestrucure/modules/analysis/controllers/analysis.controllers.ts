import { InputType } from '../../../../core/modules/analysis/input.core';
import { AnalysisServicesInterface, TypedRequestBody } from '../../../interfaces/routes.interfaces';
import { AnalysisServices } from '../services/analysis.services';
import { Response } from 'express';

export class AnalysisControllers {
    private analysisService: AnalysisServicesInterface = new AnalysisServices();
    constructor() {
        this.getAnalysisController = this.getAnalysisController.bind(this);
    }

    public async getAnalysisController(
        req: TypedRequestBody<InputType>,
        res: Response
    ): Promise<Response> {
        const loads = this.analysisService.getAnalysis(req.body);
        return res.status(200).json(loads);
    }
}
