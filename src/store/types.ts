import {IDataDrivers, IPaginations} from './interfaces';

export enum ACTypes {
  API_REQUEST = 'API_REQUEST',
  API_SUCCESS = 'API_SUCCESS',
  API_FAILURE = 'API_FAILURE',
  API_LIST_END = 'API_LIST_END',
}

interface IActionApiRequest {
  type: ACTypes.API_REQUEST;
  payload: IPaginations;
}

interface IActionApiSuccess {
  type: ACTypes.API_SUCCESS;
  data: IDataDrivers;
}

interface IActionApiFailure {
  type: ACTypes.API_FAILURE;
  error: string;
}

interface IActionApiListEnd {
  type: ACTypes.API_LIST_END;
}

export type Action =
  | IActionApiRequest
  | IActionApiSuccess
  | IActionApiFailure
  | IActionApiListEnd;
