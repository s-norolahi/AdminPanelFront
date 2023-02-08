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
  productList: any[] = [{ id: '', title: '---' }, { id: 1, title: 'لباسشویی' }, { id: 2, title: 'ظرفشویی' }, { id: 3, title: 'یخچال' }];
  constructor() {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
      catId: new FormControl('', [Validators.required])
    });
  }
  save() {
    //this.form.get('productName')?.setValue('test');
    this.form.markAsTouched();
    console.log(this.form, 'form');
    let formValue = this.form.value;
  }
}
