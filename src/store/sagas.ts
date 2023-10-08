import {getTopHeadlineRequest} from '../api';
import * as effects from '@redux-saga/core/effects';
import {ACTypes} from './types';
import {IData, IDataDrivers, IPaginationsProps} from './interfaces';

const {put, takeLatest, all, call} = effects;

function* getTopHeadline({payload}: IPaginationsProps) {
  try {
    const res: IData = yield call(getTopHeadlineRequest, payload);
    // console.log('>>>>>>>>>>>>>>>', res.data.MRData.DriverTable.Drivers);
    const data: IDataDrivers = res.data.MRData;

    if (data.DriverTable.Drivers.length > 0) {
      yield put({
        type: ACTypes.API_SUCCESS,
        data: data,
      });
    } else {
      yield put({type: ACTypes.API_LIST_END});
    }
  } catch (err: unknown) {
    yield put({
      type: ACTypes.API_FAILURE,
      error: err instanceof Error ? err.message : 'unknown error',
    });
  }
}

function* topHeadlineSaga() {
  yield takeLatest(ACTypes.API_REQUEST as any, getTopHeadline);
}

export default function* rootSaga() {
  yield all([topHeadlineSaga()]);
}
