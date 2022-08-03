import { offersMocks } from '../types/offers';
import { RootState } from '../store/root-reducer';

export type OfferDataState = {
  city: string,
  offers: offersMocks[],
};

export type State = RootState;
