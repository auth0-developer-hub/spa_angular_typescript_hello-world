import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from '../../shared/services/message.service';
import { SharedModule } from '../../shared/shared.module';
import { ProtectedComponent } from './protected.component';

@NgModule({
  declarations: [ProtectedComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProtectedComponent,
      },
    ]),
  ],
  providers: [MessageService],
})
export class ProtectedModule {}
