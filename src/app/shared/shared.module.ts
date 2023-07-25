import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ...COMPONENTS
  ],
})
export class SharedModule {}
