import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ValidationService } from '../../service/validation/validation.service';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent{
  @Input() context: FormControl;

  constructor() { }


  get errorMessage() {
   for(let propertyName in this.context.errors){
      if(this.context.errors.hasOwnProperty(propertyName)
        && this.context.touched){
           return ValidationService.getValidatorMessage(propertyName, this.context.errors[propertyName]);
      }
    }

    return null;
  }
}
