import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { InputConfig } from '../../classes/inputConfig';

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
  get errorMessage() {
    console.log(this.formGroup.get(this.fieldName)?.errors, 'errors');
    let errors = <any>(this.formGroup.get(this.fieldName)?.errors);
    let errorStr: String = '';
    for (let key in errors) {
      console.log(key, 'key');
      errorStr += errors[key];
    }
    return errorStr;

  }

}
