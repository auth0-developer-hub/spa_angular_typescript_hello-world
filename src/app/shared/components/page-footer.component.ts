import { Component } from '@angular/core';
import { Auth0ResourceModel } from '@app/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="page-footer">
      <div class="page-footer-grid">
        <div class="page-footer-grid__info">
          <div class="page-footer-info__message">
            <p class="page-footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
              <app-page-footer-hyperlink path="https://auth0.com/"
                >Auth0</app-page-footer-hyperlink
              >
            </p>
            <p class="page-footer-message__description">
              <app-page-footer-hyperlink
                path="https://auth0.com/docs/quickstarts/"
              >
                <span>
                  Securely implement authentication using Auth0 on any stack and
                  any device
                </span>
                <u>in less than 10 minutes</u>
              </app-page-footer-hyperlink>
            </p>
          </div>
          <div class="page-footer-info__button">
            <a
              id="create-account-button"
              class="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create Free Auth0 Account
            </a>
          </div>
          <div class="page-footer-info__resource-list">
            <div
              *ngFor="let resource of resourceList"
              class="page-footer-info__resource-list-item"
            >
              <app-page-footer-hyperlink [path]="resource.path">
                {{ resource.label }}
              </app-page-footer-hyperlink>
            </div>
          </div>
        </div>
        <div class="page-footer-grid__brand">
          <div class="page-footer-brand">
            <img
              class="page-footer-brand__logo"
              src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <app-page-footer-hyperlink path="https://auth0.com/"
              >Auth0 Inc</app-page-footer-hyperlink
            >
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class PageFooterComponent {
  resourceList: Auth0ResourceModel[] = [
    {
      path: 'https://auth0.com/why-auth0/',
      label: 'Why Auth0',
    },
    {
      path: 'https://auth0.com/docs/get-started',
      label: 'How It Works',
    },
    {
      path: 'https://auth0.com/blog/developers/',
      label: 'Developer Blog',
    },
    {
      path: 'https://auth0.com/contact-us',
      label: 'Contact an Expert',
    },
  ];
}
