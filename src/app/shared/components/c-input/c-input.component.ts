import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { InputConfig } from '../../classes/inputConfig';
import { ErrorApprover } from '../../formErrorHandling/ErrorApprover';
import { MinHandle } from '../../formErrorHandling/MinMaxHandle';
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
  get errorMessage() {
    //console.log(this.formGroup.get(this.fieldName)?.errors, 'errors');
    if (this.formGroup.touched) {
      let errors = <any>(this.formGroup.get(this.fieldName)?.errors);
      let requred: RequiredHandle = new RequiredHandle();
      let minMax: MinHandle = new MinHandle();

      requred.setSuccessor(minMax);
      requred.ProccessRequest(errors, this.setError);
      console.log(this.formGroup.touched, 'error str');
    }
    return this.errorStr;
  }
  setError = (errorMsg: string): void => {
    this.errorStr = errorMsg;
  }

}
