import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar-buttons',
  templateUrl: './nav-bar-buttons.component.html',
})
export class NavBarButtonsComponent {
  private auth = inject(AuthService)
  isAuthenticated$ = this.auth.isAuthenticated$;

}