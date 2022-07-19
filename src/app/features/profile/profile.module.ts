import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
      },
    ]),
  ],
})
export class ProfileModule {}
