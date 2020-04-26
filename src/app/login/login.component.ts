import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  public form: FormGroup;
  private result: FormData;
  private isSubmit: boolean;

  constructor() {
    this.form = new FormGroup({
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(formData: FormData) {
    this.result = formData;
}
}
