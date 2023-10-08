import {combineReducers} from 'redux';
import {Action, ACTypes} from './types';
import {IState} from './interfaces';

const initialState: IState = {
  loading: false,
  moreLoading: false,
  error: '',
  moreError: '',
  data: [],
  totalDrivers: 0,
  isListEnd: false,
};

const driversReducers = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ACTypes.API_REQUEST:
      if (action.payload.offset === 5) {
        return {...state, loading: true};
      } else {
        return {...state, moreLoading: true};
      }

    case ACTypes.API_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data.DriverTable.Drivers],
        totalDrivers: parseInt(action.data.total),
        error: '',
        loading: false,
        moreLoading: false,
      };

    case ACTypes.API_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        moreLoading: false,
      };

    case ACTypes.API_LIST_END:
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  drivers: driversReducers,
});
