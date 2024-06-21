import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: `
    <button class="button__login" (click)="handleLogin()">Log In</button>
  `,
})
export class LoginButtonComponent {
  private auth = inject(AuthService)

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }
}