import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from '../../shared/services/message.service';
import { SharedModule } from '../../shared/shared.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
      },
    ]),
  ],
  providers: [MessageService],
})
export class AdminModule {}
