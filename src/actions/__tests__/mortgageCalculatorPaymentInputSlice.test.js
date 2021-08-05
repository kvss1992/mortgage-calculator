import reducer, { setMortageAmortizationInYears,
  setMortgageAmount } from '../mortgageCalculatorPaymentInputSlice';

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
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
});

test('should set an mortgage amount', () => {
  const previousState = initialState
  expect(reducer(previousState, setMortgageAmount("100001"))).toEqual({
    ...initialState,
    mortgageAmount:"100001"
  })
});

test('should set an Mortage Amortization In Years', () => {
  const previousState = initialState
  expect(reducer(previousState, setMortageAmortizationInYears("24"))).toEqual({
    ...initialState,
    mortageAmortizationInYears:"24"
  })
});
