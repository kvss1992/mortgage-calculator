import { createSlice } from '@reduxjs/toolkit';

//  Util
import calculateMortage from '../utils/mortgageCalculator';

const initialState = {
  mortgageAmount:"100,000.00",
  mortageAmortizationInYears: "25",
  interestRate: "5.00",
  paymentFrequency: "Monthly",
  terms: "5",
  tableTermsData: {
    numberofPayments: '60',
    mortgagePayments: '581.60',
    prePayments: '0.00',
    principalPayments: "11,492.50",
    interestPayments: "23,403.80",
    totalCost: "34,896.30",
    totalBalance: "88,507.50"
  },
  amortizationPeriod: {
    numberofPayments: '300',
    mortgagePayments: '581.60',
    prePayments: '$0.00',
    principalPayments: "100,000.00",
    interestPayments: "74,481.50",
    totalCost: "174,481.50"
  }
}

export const paymentInput = createSlice({
  name: 'paymentInput',
  initialState,
  reducers: {
    setMortgageAmount: (state, action) => {
      state.mortgageAmount = action.payload
    },
    setMortageAmortizationInYears: (state, action) => {
      state.mortageAmortizationInYears = action.payload
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload
    },
    setPaymentFrequency: (state, action) => {
      state.paymentFrequency = action.payload
    },
    setTerms: (state, action) => {
      state.terms = action.payload
    },
    mortgageCalculation: (state, action) => {
      //  do the calculation here.
      const {mortgageAmount, mortageAmortizationInYears, interestRate, paymentFrequency, terms} = state;
      const calculateMortageFromUtil = calculateMortage(mortgageAmount, mortageAmortizationInYears, interestRate, paymentFrequency, terms);
      const {termsOfLoan, amortizationPeriodOfLoan} = calculateMortageFromUtil;
      state.tableTermsData = termsOfLoan;
      state.amortizationPeriod = amortizationPeriodOfLoan
    }
  }
})

export const { setMortgageAmount, setMortageAmortizationInYears, setInterestRate, setPaymentFrequency, setTerms, mortgageCalculation  } = paymentInput.actions;

export default paymentInput.reducer;