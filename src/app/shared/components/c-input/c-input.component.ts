import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { InputConfig } from '../../classes/inputConfig';
import { ErrorApprover } from '../../formErrorHandling/ErrorApprover';
import { MinMaxHandle } from '../../formErrorHandling/MinMaxHandle';
import { RequiredHandle } from '../../formErrorHandling/RequiredHandle';

@Component({
  selector: 'cinput',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.scss']
})
export class CInputComponent {
  @Input() fieldName: string = '';
  @Input() label: string = '';
  @Input() formGroup: FormGroup;
  @Input() type: 'text' | 'number' | 'email' = 'text';
  private errorStr: string = '';
  get hasError() {
    return this.formGroup.get(this.fieldName)?.invalid && this.formGroup.touched;
  }
  get errorMessage() {
    //console.log(this.formGroup.get(this.fieldName)?.errors, 'errors');
    if (this.formGroup.touched) {
      let errors = <any>(this.formGroup.get(this.fieldName)?.errors);
      let requred: RequiredHandle = new RequiredHandle();
      let min: MinMaxHandle = new MinMaxHandle();
      let max: MinMaxHandle = new MinMaxHandle();
      max.isMax = true
      requred.setSuccessor(min);
      min.setSuccessor(max);

      requred.ProccessRequest(errors, this.setError);
      console.log(this.formGroup.touched, 'error str');
    }
    return this.errorStr;
  }
  setError = (errorMsg: string): void => {
    this.errorStr = errorMsg;
  }

}
