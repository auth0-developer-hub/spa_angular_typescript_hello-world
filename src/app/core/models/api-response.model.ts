import { AppErrorModel } from './app-error.model';

export interface ApiResponseModel {
  data: unknown;
  error: AppErrorModel | null;
}
