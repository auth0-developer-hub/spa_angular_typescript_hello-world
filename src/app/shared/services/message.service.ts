import { Injectable } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response';
import { Message } from '../models/message';
import { RequestConfig } from '../models/request-config';
import { ExternalApiService } from './external-api.service';

@Injectable()
export class MessageService {
  constructor(public externalApiService: ExternalApiService) {}

  getPublicResource = (): Observable<ApiResponse> => {
    const config: RequestConfig = {
      url: `${env.api.serverUrl}/api/messages/public`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as Message) : null,
          error,
        });
      })
    );
  };

  getProtectedResource = (): Observable<ApiResponse> => {
    const config: RequestConfig = {
      url: `${env.api.serverUrl}/api/messages/protected`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as Message) : null,
          error,
        });
      })
    );
  };

  getAdminResource = (): Observable<ApiResponse> => {
    const config: RequestConfig = {
      url: `${env.api.serverUrl}/api/messages/admin`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as Message) : null,
          error,
        });
      })
    );
  };
}
