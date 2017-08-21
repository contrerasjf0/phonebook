import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
//import { FormControl, FormGroup,  Validators } from '@angular/forms';

import { Phone } from '../../interface/phone';

@Component({
  selector: 'app-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.scss']
})
export class FormPhoneComponent implements OnInit {

  public phone: FormGroup;
  //public prue: string = 'phoneNumber';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   /*this.phone = new FormGroup({
      phoneNumber: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      nickName: new FormControl(''),
      addres: new FormControl(''),
      company: new FormControl(''),
      srcAvatar: new FormControl('')
    });*/

    this.phone = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/)]],
      firstName: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(25)]],
      lastName: ['', Validators.compose ([Validators.required,  Validators.minLength(3), Validators.maxLength(25)])],
      nickName: ['', Validators.maxLength(10)],
      addres: ['',  Validators.maxLength(50)],
      company: ['', Validators.maxLength(20)],
      srcAvatar: ['']
    });
  }

  onSubmit({ value, valid }: { value: Phone, valid: boolean }){
    console.log(value, valid);
  }

  /*change($event){
    this.prue = "hola";
  }*/
  /*update($event){
   console.log(this.phone); 
   //console.log(this.phone.get('phoneNumber').status);
  }*/
}
