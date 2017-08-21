import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';

import capitalize from 'lodash/capitalize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private stateName: String;
  private showBtnBack: boolean;
  private showBtnAdd: boolean;

  constructor(private _router:Router) {
    
    this.showBtnBack = false;
    this.showBtnAdd = true;
    
    _router.events
    .filter((event: Event)=> event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd)=>{
      this.stateName  = capitalize(event.urlAfterRedirects.split('/')[1]);

      this.changeView(this.stateName);
    });

   }

  ngOnInit() {
  
  }

  private changeView(state: String):void{

    if(state === 'Add'){
      this.showBtnBack = true;
      this.showBtnAdd = false;
    }else if(state === 'Show'){
      this.showBtnBack = true;
      this.showBtnAdd = true;
    }else if(state == 'List'){
      this.showBtnBack = false;
      this.showBtnAdd = true;
    }
  }

}
