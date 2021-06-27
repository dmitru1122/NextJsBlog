import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { failure, loadDataSuccess, sendDataSuccess } from './actions';
import { IPost, actionTypes } from './interfaces';

function* loadDataSaga() {
  try {
    const { status, data }: AxiosResponse<IPost[]> = yield call(
      axios.get,
      'https://simple-blog-api.crew.red/posts',
    );

    if (status === 200) {
      yield put(loadDataSuccess(data));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

interface Form {
  data: IPost;
  type: string;
}

function* sendDataSaga(form: Form): any {
  try {
    const { status } = yield axios.post<{ message: string; data: Form }>(
      `https://simple-blog-api.crew.red/posts`,
      form.data,
    );
    if (status === 201) {
      yield put(sendDataSuccess(true));
    }
  } catch (error) {
    yield put(sendDataSuccess(false));
  }
}

function* rootSaga(): Generator {
  yield all([
    takeLatest(actionTypes.SEND_DATA, sendDataSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ]);
}

export default rootSaga;
