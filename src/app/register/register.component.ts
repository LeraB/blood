import { Component, OnInit, Inject } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Http} from '@angular/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public form: FormGroup;
  private result: FormData;
  private isSubmit: boolean;


  constructor(@Inject(Http) private http: Http) {
    this.form = new FormGroup({
      fullName: new FormControl('', Validators.required),
      dateOfBirthday: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.pattern('^[+]*380{0,1}[ \\s\\./0-9]*$'), Validators.maxLength(13), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      bloodType: new FormControl(1, Validators.required),
      locality: new FormControl('', Validators.required),
      lastBeingDonor: new FormControl('', Validators.required),
      consent: new FormControl(true, Validators.required),
    });
  }

  ngOnInit() {
  }

  onSubmit(formData: FormData) {
    this.result = formData;
    console.log('JSON.stringify(this.result) => ', JSON.stringify(this.result));
    // this.http.post('http://localhost:3000/user', JSON.stringify(this.result)).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // );

    this.result.http.post('http://localhost:3000/user', JSON.stringify(this.result)).subscribe((data) => {});
  }
}
