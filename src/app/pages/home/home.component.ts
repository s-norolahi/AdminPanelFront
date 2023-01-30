import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputConfig } from 'src/app/shared/classes/inputConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  constructor() {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }
  save() {
    //this.form.get('productName')?.setValue('test');
    this.form.markAsTouched();
    console.log(this.form, 'form');
    let formValue = this.form.value;
  }
}
