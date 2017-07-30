import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-show-phone',
  templateUrl: './show-phone.component.html',
  styleUrls: ['./show-phone.component.scss']
})
export class ShowPhoneComponent implements OnInit {

  public id: any;
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
     this.route.paramMap
     .switchMap((params: ParamMap) => params.get('id'))
     .subscribe(id =>{
       console.log('id-->',id);
       this.id = id;
     });
  }

}
