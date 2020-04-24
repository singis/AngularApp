import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckuploadComponent } from './checkupload/checkupload.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MessageComponent } from './message/message.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckuploadComponent,
    ConfirmationComponent,
    MessageComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
