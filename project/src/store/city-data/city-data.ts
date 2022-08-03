
import { createReducer } from '@reduxjs/toolkit';
import { OfferDataState } from '../../types/state';
import { setCity, setOffers } from '../action';

export const initialState: OfferDataState = {
  city: 'Paris',
  offers: [],
};

export const cityData = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers.length ? action.payload.offers : state.offers;
    });
});

