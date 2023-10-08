import {ACTypes} from './types';
import {IPaginations} from './interfaces';

export const topHeadlineRequest = (params: IPaginations) => ({
  type: ACTypes.API_REQUEST,
  payload: {
    limit: params.limit,
    offset: params.offset,
  },
});
