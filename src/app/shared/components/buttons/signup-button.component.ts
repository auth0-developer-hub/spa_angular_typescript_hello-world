import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  template: `
    <button class="button__sign-up" (click)="handleSignUp()">Sign Up</button>
  `,
})
export class SignupButtonComponent {
  private auth = inject(AuthService)

  handleSignUp(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  }
}