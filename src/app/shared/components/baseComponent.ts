import { Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MinMaxHandle } from "../formErrorHandling/MinMaxHandle";
import { RequiredHandle } from "../formErrorHandling/RequiredHandle";

export class BaseComponent {
    _fieldName: string = '';
    _label: string = '';
    _formGroup: FormGroup;
    private errorStr: string = '';
    /**
     *
     */
    setConfig(fieldName: string, label: string, formGroup: FormGroup) {
        this._formGroup = formGroup;
        this._fieldName = fieldName;
        this._label = label;

    }
    get hasError() {
        return this._formGroup.get(this._fieldName)?.invalid && this._formGroup.touched;
    }
    get errorMessage() {
        //console.log(this.formGroup.get(this.fieldName)?.errors, 'errors');
        if (this._formGroup.touched) {
            let errors = <any>(this._formGroup.get(this._fieldName)?.errors);
            let requred: RequiredHandle = new RequiredHandle();
            let min: MinMaxHandle = new MinMaxHandle();
            let max: MinMaxHandle = new MinMaxHandle();
            max.isMax = true
            requred.setSuccessor(min);
            min.setSuccessor(max);

            requred.ProccessRequest(errors, this.setError);
            console.log(this._formGroup.touched, 'error str');
        }
        return this.errorStr;
    }
    setError = (errorMsg: string): void => {
        this.errorStr = errorMsg;
    }
}