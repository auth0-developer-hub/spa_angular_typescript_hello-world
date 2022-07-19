import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CallbackComponent } from './callback.component';

@NgModule({
  declarations: [CallbackComponent],
  imports: [CommonModule, SharedModule],
})
export class CallbackModule {}
