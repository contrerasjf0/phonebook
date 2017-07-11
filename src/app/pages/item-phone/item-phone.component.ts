import { Component, OnInit, Input } from '@angular/core';
import {Phone} from '../../interface/phone'

@Component({
  selector: 'app-item-phone',
  templateUrl: './item-phone.component.html',
  styleUrls: ['./item-phone.component.scss']
})

export class ItemPhoneComponent implements OnInit {

  @Input() phoneItem:Phone;

  constructor() {
     
   }

  ngOnInit() {
    
  }

}
