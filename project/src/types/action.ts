import {AxiosInstance} from 'axios';
import {State} from './state';
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';


export enum ActionType {
  SetCity = 'dataCity/setCity',
  SetOffers = 'dataCity/setOffers',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
