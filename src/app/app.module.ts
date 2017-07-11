import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import  ContainerComponent  from './layout/container';
import  HeaderComponent  from './layout/header';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import { ListPhoneComponent } from './pages/list-phone/list-phone.component';
import { ItemPhoneComponent } from './pages/item-phone/item-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListPhoneComponent,
    ItemPhoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
