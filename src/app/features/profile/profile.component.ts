import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfileModel } from '@app/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  user$ = of({
    nickname: 'Customer',
    name: 'One Customer',
    picture: 'https://cdn.auth0.com/blog/hello-auth0/auth0-user.png',
    updated_at: '2021-05-04T21:33:09.415Z',
    email: 'customer@example.com',
    email_verified: false,
    sub: 'auth0|12345678901234567890',
  } as UserProfileModel);

  title = 'User Profile Object';

  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
}
