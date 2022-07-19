import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap } from 'rxjs';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {
  message = '';

  constructor(
    public messageService: MessageService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth
      .getAccessTokenSilently()
      .pipe(
        switchMap((accessToken) =>
          this.messageService.getProtectedResource(accessToken)
        )
      )
      .subscribe((response) => {
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
