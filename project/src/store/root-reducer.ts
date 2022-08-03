import {combineReducers} from 'redux';
import {cityData} from './city-data/city-data';

export enum NameSpace {
   DataCity = 'DATA_CITY',
 }

export const rootReducer = combineReducers({
  [NameSpace.DataCity]: cityData,
});

export type RootState = ReturnType<typeof rootReducer>;
