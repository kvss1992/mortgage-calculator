import { configureStore } from '@reduxjs/toolkit';
import paymentInputReducer from '../actions/mortgageCalculatorPaymentInputSlice'

export const store = configureStore({
  reducer: {
    paymentInput: paymentInputReducer,
  },
});