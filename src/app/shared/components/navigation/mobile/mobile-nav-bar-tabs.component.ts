import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-tabs',
  templateUrl: './mobile-nav-bar-tabs.component.html',
})
export class MobileNavBarTabsComponent {
  @Output() mobileNavBarTabClick = new EventEmitter<string>();

  onMobileNavBarTabClick(path: string): void {
    this.mobileNavBarTabClick.emit(path);
  }
}
