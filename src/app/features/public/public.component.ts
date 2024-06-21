import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from '@app/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit {
  private messageService = inject(MessageService)
  message = '';

  ngOnInit(): void {
    this.messageService.getPublicResource().subscribe((response) => {
      const { data, error } = response;

      if (data) {
        this.message = JSON.stringify(data, null, 2);
      }

      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });
  }
}
