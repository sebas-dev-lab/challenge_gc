import { mathRound } from '../../common/utils.common';
import { charactsTypes, InputCharacts, InputType } from '../../core/modules/analysis/input.core';
import { useCases } from '../../Infraestrucure/server/envs/envs';
import { AnalysisCasesInterface } from '../../Infraestrucure/interfaces/routes.interfaces';
import { colorParameters, excludeLimit, moistureParameters } from '../../core/modules/analysis/parameters.core';
import { OutputCalcs, OutputLoads } from '../../core/modules/analysis/output.core';

export class AnalysisCases implements AnalysisCasesInterface {
    /**
   *  =============== CALCULATE VALUE $ BY LOADS =================
   */
    calcEntry(data: InputType): OutputLoads {
    // =============== INIT ============ //
        const loads = data.loads;
        const result: Array<OutputCalcs> = [];

        // ============= Calc results by Sample ============ //
        for (const l of loads) {
            const quantity = l.quantity;
            let total: number = quantity; // Varies depending on the calculation
            let adjust = 0;

            // ================= Find each data =========== //
            const moisture: InputCharacts | undefined = l.characteristics.find(
                (x: InputCharacts) => x.name === charactsTypes.moisture
            );

            const color: InputCharacts | undefined = l.characteristics.find(
                (x: InputCharacts) => x.name === charactsTypes.color
            );

            const damaged_grain: InputCharacts | undefined = l.characteristics.find(
                (x: InputCharacts) => x.name === charactsTypes.damaged_grain
            );

            // ============== Moisture Calc ============== /
            if (moisture) {
                for (const m of moistureParameters) {
                    if (moisture.value > excludeLimit) {
                        throw new Error('Moisture failed. > 17');
                    }
                    if (moisture.value > m[0] && moisture.value <= m[1]) {
                        const m_adjust = total * (1 - m[2]);
                        adjust = mathRound(adjust + m_adjust);
                        total = mathRound(total - m_adjust);
                    }
                }
            }

            // ============== Color Calc ============== /
            if (color) {
                const cvalue: number = colorParameters[color.value];
                const c_adjust = total * cvalue;
                adjust = mathRound(adjust + c_adjust);
                total = mathRound(total - c_adjust);
            }

            // ============== Damage Calc ============== /
            if (damaged_grain) {
                const dvalue: number = damaged_grain.value as number;
                const d_adjust = total * (dvalue / 100);
                adjust = mathRound(adjust + d_adjust);
                total = mathRound(total - d_adjust);
            }

            // ============== Value Calc ============== /
            const value: number = mathRound(useCases.price * total);
            
            result.push({
                id: l.id,
                quantity,
                adjust,
                total,
                value
            });
        }
        return {
            loads: result
        };
    }
}
