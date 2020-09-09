import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing/login-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { LoginOutButtonComponent } from './login-out-button/login-out-button.component';

@NgModule({
  declarations: [LoginComponent, LoginOutButtonComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LoginRoutingModule]
})
export class LogInOutModule { }
