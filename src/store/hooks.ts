import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './';

export const useAppdispatch = () => useDispatch<AppDispatch>;
export const useAppselector: TypedUseSelectorHook<RootState> = useSelector;
