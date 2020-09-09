import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-out-button',
  templateUrl: './login-out-button.component.html',
  styleUrls: ['./login-out-button.component.css']
})
export class LoginOutButtonComponent implements OnInit {
  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {  }

  login() {  this.router.navigateByUrl('login');  }

  logout() { this.loginService.logout(); }


}
