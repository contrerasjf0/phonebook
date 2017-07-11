import { Component, OnInit } from '@angular/core';

import {Phone} from '../../interface/phone';
import PhoneService from '../../service/phone/phone.service';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.scss'],
  providers: [PhoneService]
})
export class ListPhoneComponent implements OnInit {

  phones:Phone[];

  constructor(private phoneService:PhoneService) { }

  ngOnInit() {
    this.phoneService.getPhones()
                     .then(phones => this.phones = phones);
  }

}
