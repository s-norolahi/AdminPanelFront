import { ErrorApprover, SetErrorMessage } from "./ErrorApprover";

export class RequiredHandle extends ErrorApprover {
    ProccessRequest(error: any, setErrorMsg: SetErrorMessage): void {
        let msg: string = '';
        console.log(error, 'error process');
        for (let key in error) {
            if (key == 'required') {
                msg = 'اجباری میباشد';
                this.hasError = true
            }
        }
        this.setNextProccessor(msg, error, setErrorMsg);
    }
}