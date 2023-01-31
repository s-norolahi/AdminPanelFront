import { ErrorApprover, SetErrorMessage } from "./ErrorApprover";

export class RequiredHandle extends ErrorApprover {
    ProccessRequest(error: any, setErrorMsg: SetErrorMessage): void {
        let msg: string = '';
        console.log(error, 'error process');
        let isRequired: boolean = false;
        for (let key in error) {
            if (key == 'required') {
                msg = 'اجباری میباشد';
                isRequired = true
            }
        }
        setErrorMsg(msg);
        if (!isRequired && this._successor != null)
            this._successor.ProccessRequest(error, setErrorMsg);
    }
}