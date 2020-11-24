import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { DefaultService } from 'src/app/default.service';
import { WelloperatorComponent } from './welloperator/welloperator.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    WelloperatorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    LoginModule,
  ],
  providers: [
    DefaultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
