import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-tab',
  template: `
    <a
      (click)="onMobileNavBarTabClick()"
      [routerLink]="path"
      class="mobile-nav-bar__tab"
      routerLinkActive="mobile-nav-bar__tab--active"
    >
      {{ label }}
    </a>
  `,
})
export class MobileNavBarTabComponent {
  @Input() path: string | undefined;
  @Input() label: string | undefined;

  @Output() mobileNavBarTabClick = new EventEmitter<string>();

  onMobileNavBarTabClick(): void {
    this.mobileNavBarTabClick.emit(this.path);
  }
}
