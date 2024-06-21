export interface RequestConfigModel {
  url: string;
  method: string;
  headers: {
    [index: string]: string;
  };
}
