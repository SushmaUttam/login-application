import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule,
  HttpClientModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatIconModule],
  declarations: [ AppComponent, HelloComponent, LoginComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
})
export class AppModule { }
