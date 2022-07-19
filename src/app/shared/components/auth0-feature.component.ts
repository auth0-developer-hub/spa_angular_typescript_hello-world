import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth0-feature',
  template: `
    <a
      class="auth0-feature"
      target="_blank"
      rel="noopener noreferrer"
      [href]="resourceUrl"
    >
      <h3 class="auth0-feature__headline">
        <img
          class="auth0-feature__icon"
          [src]="icon"
          alt="external link icon"
        />
        {{ title }}
      </h3>
      <p class="auth0-feature__description">{{ description }}</p>
    </a>
  `,
})
export class Auth0FeatureComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() resourceUrl: string | undefined;
  @Input() icon: string | undefined;
}
