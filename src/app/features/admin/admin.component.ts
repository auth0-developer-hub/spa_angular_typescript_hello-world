import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from '@app/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  private messageService = inject(MessageService);
  message = '';

  ngOnInit(): void {
    this.messageService.getAdminResource().subscribe((response) => {
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
