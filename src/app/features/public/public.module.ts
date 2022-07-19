import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from '../../shared/services/message.service';
import { SharedModule } from '../../shared/shared.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublicComponent,
      },
    ]),
  ],
  providers: [MessageService],
})
export class PublicModule {}
