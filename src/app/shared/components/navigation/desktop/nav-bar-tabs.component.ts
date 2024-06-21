import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar-tabs',
  templateUrl: './nav-bar-tabs.component.html',
})
export class NavBarTabsComponent {
  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$;

}