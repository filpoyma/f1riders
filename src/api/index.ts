import axios from 'axios';
import {IData, IPaginations} from '../store/interfaces';

const endpoint = 'https://ergast.com/api/f1/drivers.json';

export const getTopHeadlineRequest = async (
  params: IPaginations,
): Promise<IData> => {
  return axios.get(endpoint, {
    params: {
      limit: params.limit,
      offset: params.offset,
    },
  });
};
