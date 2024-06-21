import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-mobile-nav-bar-buttons',
  templateUrl: './mobile-nav-bar-buttons.component.html',
})
export class MobileNavBarButtonsComponent {
  private auth = inject(AuthService)
  isAuthenticated$ = this.auth.isAuthenticated$;
}