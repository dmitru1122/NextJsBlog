import { IPost } from './index';

export enum actionTypes {
  FAILURE = 'FAILURE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  SEND_DATA = 'SEND_DATA',
  SEND_DATA_SUCCESS = 'SEND_DATA_SUCCESS',
}

export type Action = Failure | LoadData | LoadDataSuccess | SendDataSuccess;

export interface Failure {
  type: actionTypes.FAILURE;
  error: Error;
}

export interface LoadData {
  type: actionTypes.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: actionTypes.LOAD_DATA_SUCCESS;
  data: IPost[];
}

export interface SendData {
  type: actionTypes.SEND_DATA;
  data: IPost;
}

export interface SendDataSuccess {
  type: actionTypes.SEND_DATA_SUCCESS;
  data: boolean;
}
