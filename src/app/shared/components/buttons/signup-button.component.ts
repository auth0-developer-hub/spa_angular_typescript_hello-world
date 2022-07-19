import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  template: `
    <button class="button__sign-up" (click)="handleSignUp()">Sign Up</button>
  `,
})
export class SignupButtonComponent {
  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  handleSignUp(): void {
    this.auth.loginWithRedirect({
      screen_hint: 'signup',
      appState: {
        target: '/profile',
      },
    });
  }
}
