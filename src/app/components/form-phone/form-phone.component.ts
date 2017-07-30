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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   /*this.phone = new FormGroup({
      number: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      nickName: new FormControl(''),
      addres: new FormControl(''),
      company: new FormControl(''),
      srcAvatar: new FormControl('')
    });*/

    this.phone = this.fb.group({
      number: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: [''],
      addres: [''],
      company: [''],
      srcAvatar: ['']
    });
  }

  onSubmit({ value, valid }: { value: Phone, valid: boolean }){
    console.log(value, valid);
  }

}
