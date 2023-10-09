import {getTopHeadlineRequest} from '../api';
import {put, takeLatest, all, call} from '@redux-saga/core/effects';
import {ACTypes} from './types';
import {IData, IDataDrivers, IPaginationsProps} from './interfaces';
import {apiFailure, apiListEnd, apiSuccessRequest} from './action';

function* getTopHeadline({payload}: IPaginationsProps) {
  try {
    const res: IData = yield call(getTopHeadlineRequest, payload);
    const data: IDataDrivers = res.data.MRData;

    if (data.DriverTable.Drivers.length > 0) {
      yield put(apiSuccessRequest(data));
    } else {
      yield put(apiListEnd());
    }
  } catch (err) {
    yield put(apiFailure(err));
  }
}

function* topHeadlineSaga() {
  yield takeLatest(ACTypes.API_REQUEST as any, getTopHeadline);
}

export default function* rootSaga() {
  yield all([topHeadlineSaga()]);
}
