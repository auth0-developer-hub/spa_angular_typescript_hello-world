import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpInterceptor, AuthModule, authHttpInterceptorFn } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { SharedModule } from './shared';

@NgModule({ 
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        AuthModule.forRoot({
          ...env.auth0,
          httpInterceptor: {
            allowedList: [`${env.api.serverUrl}/api/messages/admin`, `${env.api.serverUrl}/api/messages/protected`],
          },
        }),
    ],
    providers: [
        AuthHttpInterceptor,
        provideHttpClient(withInterceptors([authHttpInterceptorFn]))
    ]
})
export class AppModule {}
