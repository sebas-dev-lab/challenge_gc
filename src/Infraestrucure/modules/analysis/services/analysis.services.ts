import { InputType } from '../../../../core/modules/analysis/input.core';
import { OutputLoads } from '../../../../core/modules/analysis/output.core';
import { AnalysisCases } from '../../../../useCases/analysis/inputCalculator';
import { AnalysisCasesInterface, AnalysisServicesInterface } from '../../../interfaces/routes.interfaces';

export class AnalysisServices implements AnalysisServicesInterface {
    private _inputAnalysis: AnalysisCasesInterface;
    constructor() {
        this._inputAnalysis = new AnalysisCases();
    }

    getAnalysis(data: InputType): OutputLoads | boolean {
        const loads: OutputLoads = this._inputAnalysis.calcEntry(data);
        return loads;
    }
}
