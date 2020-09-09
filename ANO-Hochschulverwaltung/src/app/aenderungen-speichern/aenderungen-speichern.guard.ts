import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {AenderungenSpeichernInterface} from './aenderungen-speichern-interface';
@Injectable({
  providedIn: 'root'
})
export class AenderungenSpeichernGuard implements
  CanDeactivate<AenderungenSpeichernInterface> {
  canDeactivate(component: AenderungenSpeichernInterface,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean {
    if (component.hatUngespeicherteAenderungen()) {
      return confirm('Trotz ungespeicherter Änderungen verlassen?');
    } else {
      return true; // Verlassen des Dialogs OK
    }
  }
}
