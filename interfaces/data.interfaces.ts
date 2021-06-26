export interface IPost {
  title: string;
  body: string;
  id?: string;
}

export interface AppState {
  error: null | Error;
  lastUpdate: number;
  light: boolean;
  placeholderData: IPost[] | null;
  sendDataSuccess: boolean;
}
