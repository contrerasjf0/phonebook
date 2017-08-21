import { Injectable } from '@angular/core';

import get from 'lodash/get';

import MESSAGES_ERRORS from '../../resources/lang/es/messages-errors';

@Injectable()
export class ValidationService {

  constructor() { }

   static getValidatorMessage(validatorName: string, validatorValue?: any): string{
    let message = get(MESSAGES_ERRORS, `${validatorName}`);
    return  this.setValue(message? message: '' , validatorValue.requiredLength);
  }

  private static setValue(message: string, value: any): string{
    return message.replace('#val', value);
  }

}
