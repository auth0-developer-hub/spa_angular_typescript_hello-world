export interface RequestConfig {
  url: string;
  method: string;
  headers: {
    [index: string]: string;
  };
}
