import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { WelloperatorModule } from './welloperator/welloperator.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    WelloperatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
