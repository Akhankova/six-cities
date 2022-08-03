import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { offersMocks } from '../types/offers';

export const setCity = createAction(
  ActionType.SetCity,
  (city:string) => ({
    payload: { city},
  }),
);

export const setOffers = createAction(
  ActionType.SetOffers,
  (offers: offersMocks[]) => ({
    payload: {offers},
  }),
);

