import { responseType } from '../../../../common/types.common';
import { response } from '../../../../common/utils.common';
import { credentials } from '../../../../core/modules/auth/credentials.auth';
import { AuthCases } from '../../../../useCases/auth/auth.cases';
import { AuthCasesInterface, AuthServicesInterface } from '../../../interfaces/routes.interfaces';

export class AuthServices implements AuthServicesInterface {
    private _authCases: AuthCasesInterface;
    private response = response;
    constructor() {
        this._authCases = new AuthCases();
    }

    async register(data: credentials): Promise<responseType> {
        const register = await this._authCases.register(data);
        return this.response(register, 'User was register successfully.', 'Something was wrong!.', 201, 403);
    }

    async login(data: credentials): Promise<responseType> {
        const log = await this._authCases.login(data);
        return this.response(log, 'User login successfully.', 'Something was wrong!.', 200, 401);
    }

    logout(id: string): responseType {
        const log =this._authCases.logout(id);
        return this.response(log, 'User logout successfully.', 'Something was wrong!.', 200, 403);

    }
}
