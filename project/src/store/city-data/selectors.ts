import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { createSelector } from 'reselect';
import { offersMocks } from '../../types/offers';

export const getCity = (state: State): string => state[NameSpace.DataCity].city;
export const getOffers = (state: State): offersMocks[] => state[NameSpace.DataCity].offers;

export const getFilterOffers = createSelector<State, offersMocks[], string, offersMocks[]>(
  getOffers,
  getCity,
  (offers, city) =>
    offers.filter((offer:any) => offer.city.name === city),
);
