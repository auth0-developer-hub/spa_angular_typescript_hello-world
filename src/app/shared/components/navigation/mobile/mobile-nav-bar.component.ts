import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav-bar',
  template: `
    <div class="mobile-nav-bar__container">
      <nav class="mobile-nav-bar">
        <app-mobile-nav-bar-brand
          (mobileNavBarBrandClick)="closeMobileMenu()"
        ></app-mobile-nav-bar-brand>
        <span
          id="mobile-menu-toggle-button"
          (click)="toggleMobileMenu()"
          class="mobile-nav-bar__toggle material-icons"
        >
          {{ mobileMenuIcon }}
        </span>
        <div
          *ngIf="mobileMenuState === MobileMenuState.OPEN"
          class="mobile-nav-bar__menu"
        >
          <app-mobile-nav-bar-tabs
            (mobileNavBarTabClick)="handleNavTabClick($event)"
          ></app-mobile-nav-bar-tabs>
          <app-mobile-nav-bar-buttons></app-mobile-nav-bar-buttons>
        </div>
      </nav>
    </div>
  `,
})
export class MobileNavBarComponent implements OnInit {
  MobileMenuState = {
    OPEN: 'open',
    CLOSED: 'closed',
  };

  MobileMenuIcon = {
    CLOSE: 'close',
    MENU: 'menu',
  };

  mobileMenuState = this.MobileMenuState.CLOSED;
  mobileMenuIcon = this.MobileMenuIcon.MENU;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (this.mobileMenuState === this.MobileMenuState.OPEN) {
          this.closeMobileMenu();
        }
      }
    });
  }

  toggleMobileMenu() {
    switch (this.mobileMenuState) {
      case this.MobileMenuState.OPEN: {
        this.closeMobileMenu();

        return;
      }

      case this.MobileMenuState.CLOSED: {
        this.openMobileMenu();

        return;
      }
    }
  }

  closeMobileMenu() {
    document.body.classList.remove('mobile-scroll-lock');
    this.mobileMenuState = this.MobileMenuState.CLOSED;
    this.mobileMenuIcon = this.MobileMenuIcon.MENU;
  }

  openMobileMenu() {
    document.body.classList.add('mobile-scroll-lock');
    this.mobileMenuState = this.MobileMenuState.OPEN;
    this.mobileMenuIcon = this.MobileMenuIcon.CLOSE;
  }

  handleNavTabClick(path: string) {
    if (
      this.mobileMenuState === this.MobileMenuState.OPEN &&
      path === this.router.url
    ) {
      this.closeMobileMenu();
    }
  }
}
