import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  showAlert: boolean = false;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  login() {
    console.log(this.form, 'form');
    let formValue = this.form.value;
    /*to do: check user pass in api*/
    if (this.form.valid && formValue.email == 'admin' && formValue.password == '123456')
      this.router.navigate(["/home"]);
    else
      this.showAlert = true;
  }

}
