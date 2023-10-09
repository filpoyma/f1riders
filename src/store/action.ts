import {ACTypes} from './types';
import {IDataDrivers, IPaginations} from './interfaces';

export const topHeadlineRequest = (params: IPaginations) => ({
  type: ACTypes.API_REQUEST,
  payload: {
    limit: params.limit,
    offset: params.offset,
  },
});

export const apiSuccessRequest = (data: IDataDrivers) => ({
  type: ACTypes.API_SUCCESS,
  data: data,
});

export const apiListEnd = () => ({type: ACTypes.API_LIST_END});

export const apiFailure = (err: unknown) => ({
  type: ACTypes.API_FAILURE,
  error: err instanceof Error ? err.message : 'unknown error',
});
