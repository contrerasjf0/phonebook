import { Injectable } from '@angular/core';
import {Phone} from '../../interface/phone';
import PHONES from '../../mock/phones';

@Injectable()
export default class PhoneService {


  constructor() { }

  getPhones():Promise<Phone[]>{
    return Promise.resolve(PHONES);
  }

}
