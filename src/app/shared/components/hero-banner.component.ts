import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--aqua-emerald">
      <div class="hero-banner__logo">
        <img class="hero-banner__image" [src]="logo" alt="Angular logo" />
      </div>
      <h1 class="hero-banner__headline">Hello, Angular World!</h1>
      <p class="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for Angular apps using <strong>Auth0</strong>.
      </p>
      <a
        id="code-sample-link"
        class="button button--secondary"
        href="https://developer.auth0.com/resources/code-samples/spa/angular/basic-authentication"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out the Angular code sample →
      </a>
    </div>
  `,
})
export class HeroBannerComponent {
  logo = 'https://cdn.auth0.com/blog/developer-hub/angular-logo.svg';
}
