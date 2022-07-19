import { AppError } from './app-error';

export interface ApiResponse {
  data: unknown;
  error: AppError | null;
}
