import { ErrorApprover, SetErrorMessage } from "./ErrorApprover";

export class MinMaxHandle extends ErrorApprover {
    isMax: boolean = false;
    ProccessRequest(error: any, setErrorMsg: SetErrorMessage): void {
        let msg: string = '';
        let obj = (!this.isMax) ? error.minlength : error.maxlength;
        console.log(error, 'error process min length:');
        if (obj != undefined)
            if (obj.actualLength < obj.requiredLength || (this.isMax && obj.actualLength > obj.requiredLength)) {
                msg = `وارد نمایید ${obj.requiredLength}${!this.isMax ? 'حداقل' : 'حداکثر'} تعداد`;
                this.hasError = true
            }
        this.setNextProccessor(msg, error, setErrorMsg)
    }
}
