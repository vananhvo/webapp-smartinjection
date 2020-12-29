import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './regulator/default/default.module';
import { DefaultService } from 'src/app/default.service';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { WelloperatorModule } from './welloperator/welloperator.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    LoginModule,
    WelloperatorModule,
    MaterialFileInputModule
  ],
  providers: [
    DefaultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
