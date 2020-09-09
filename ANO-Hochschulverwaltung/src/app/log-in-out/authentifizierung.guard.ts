import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentifizierungGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) {
  }

  checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      this.loginService.redirectUrl = url; // Aufruf-URL merken, um später dorthin zurückzunavigieren
      this.router.navigate(['/login']);   // Auf LoginComponent umleiten
      return false;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

}
