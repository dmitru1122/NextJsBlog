import { IPost, actionTypes } from '../interfaces';
import * as actionIs from '../interfaces/actions.interfaces';

export function failure(error: Error): actionIs.Failure {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData(): actionIs.LoadData {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data: IPost[]): actionIs.LoadDataSuccess {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function sendData(data: IPost): actionIs.SendData {
  return {
    type: actionTypes.SEND_DATA,
    data,
  };
}

export function sendDataSuccess(data: boolean | null): actionIs.SendDataSuccess {
  return {
    type: actionTypes.SEND_DATA_SUCCESS,
    data,
  };
}
// export const sendData = (nr) => {
//   return {
//     type: actionTypes.SEND_DATA,
//     data,
//   };
// };
