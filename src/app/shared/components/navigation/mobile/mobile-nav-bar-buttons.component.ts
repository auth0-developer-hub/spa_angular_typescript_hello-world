import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-mobile-nav-bar-buttons',
  templateUrl: './mobile-nav-bar-buttons.component.html',
})
export class MobileNavBarButtonsComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;

  constructor(private auth: AuthService) {}
}
