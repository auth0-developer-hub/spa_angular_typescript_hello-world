import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  template: `
    <button class="button__logout" (click)="handleLogout()">Log Out</button>
  `,
})
export class LogoutButtonComponent {
  private auth = inject(AuthService);
  private doc = inject(DOCUMENT)
  
  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}