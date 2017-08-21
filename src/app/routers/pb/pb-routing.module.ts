import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPhoneComponent } from '../../pages/list-phone/list-phone.component';
import { ShowPhoneComponent } from '../../pages/show-phone/show-phone.component';
import { AddPhoneComponent } from '../../pages/add-phone/add-phone.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListPhoneComponent
  },
  {
    path: 'show/:id',
    component: ShowPhoneComponent
  },
  {
    path: 'add',
    component: AddPhoneComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PbRoutingModule { }
