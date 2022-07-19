import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-footer-hyperlink',
  template: `
    <a
      [href]="path"
      class="page-footer__hyperlink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class PageFooterHyperlinkComponent {
  @Input() path: string | undefined;
}
