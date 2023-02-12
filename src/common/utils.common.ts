import { responseType } from './types.common';

export const mathRound = (x: number): number => {
    return Math.round(x * 100) / 100;
};

export function response(
    content: unknown,
    succcess: string,
    failed: string,
    success_code: number,
    failed_code: number
): responseType {
    if (content) {
        return {
            data: content,
            code: success_code,
            message: succcess,
            error: false
        };
    }
    return {
        code: failed_code,
        message: failed,
        error: true
    };
}
