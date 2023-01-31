import { ErrorApprover, SetErrorMessage } from "./ErrorApprover";

export class MinHandle extends ErrorApprover {
    ProccessRequest(error: any, setErrorMsg: SetErrorMessage): void {
        let msg: string = '';
        console.log(error, 'error process min length');
        let hasError: boolean = false;
        let obj = error.minlength;
        if (obj.actualLength < obj.requiredLength) {
            msg = `وارد نمایید ${obj.requiredLength}حداقل تعداد`;
            hasError = true
        }

        setErrorMsg(msg);
        if (!hasError && this._successor != null)
            this._successor.ProccessRequest;
    }
}