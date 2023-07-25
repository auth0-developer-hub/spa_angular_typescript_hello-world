import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { catchError, mergeMap, Observable, of } from 'rxjs';
import { ApiResponseModel, AppErrorModel, RequestConfigModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {
  constructor(private http: HttpClient) {}

  callExternalApiWithAxios = async (options: {
    config: AxiosRequestConfig;
  }): Promise<ApiResponseModel> => {
    try {
      const response = await axios(options.config);
      const { data } = response;

      return {
        data,
        error: null,
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const axiosError = error;

        const { response } = axiosError;

        let message = 'http request failed';

        if (response && response.statusText) {
          message = response.statusText;
        }

        if (axiosError.message) {
          message = axiosError.message;
        }

        if (response && response.data && (response.data as AppErrorModel).message) {
          message = (response.data as AppErrorModel).message;
        }

        return {
          data: null,
          error: {
            message,
          },
        };
      }

      return {
        data: null,
        error: {
          message: (error as Error).message,
        },
      };
    }
  };

  callExternalApi = (config: RequestConfigModel): Observable<ApiResponseModel> => {
    return this.http
      .request<unknown>(config.method, config.url, config.headers)
      .pipe(
        mergeMap((data) => {
          return of({
            data: data,
            error: null,
          });
        }),
        catchError((err) => {
          if (err.error && err.status) {
            return of({
              data: null,
              error: err.error,
            });
          }

          return of({
            data: null,
            error: {
              message: err.message,
            },
          });
        })
      );
  };
}
