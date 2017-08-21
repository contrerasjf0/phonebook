import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import  ContainerComponent  from './layout/container';
import  HeaderComponent  from './layout/header';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import { ListPhoneComponent } from './pages/list-phone/list-phone.component';
import { ItemPhoneComponent } from './pages/item-phone/item-phone.component';
import { ShowPhoneComponent } from './pages/show-phone/show-phone.component';
import { PbRoutingModule } from './routers/pb/pb-routing.module';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FormPhoneComponent } from './components/form-phone/form-phone.component';
import { MessageErrorComponent } from './components/message-error/message-error.component';
import { AddPhoneComponent } from './pages/add-phone/add-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListPhoneComponent,
    ItemPhoneComponent,
    ShowPhoneComponent,
    FileUploaderComponent,
    FormPhoneComponent,
    MessageErrorComponent,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PbRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
