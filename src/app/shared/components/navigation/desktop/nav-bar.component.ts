import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <div class="nav-bar__container">
      <nav class="nav-bar">
        <app-nav-bar-brand></app-nav-bar-brand>
        <app-nav-bar-tabs></app-nav-bar-tabs>
        <app-nav-bar-buttons></app-nav-bar-buttons>
      </nav>
    </div>
  `,
})
export class NavBarComponent {}
