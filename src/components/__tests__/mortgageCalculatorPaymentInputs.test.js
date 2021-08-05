import { render, screen } from '@testing-library/react';
import * as redux from "react-redux";
import MortgageCalculatorPaymentInputs from '../MortgageCalculatorPaymentInputs'

test('renders Mortgage Calculator Payment Inputs on screen', () => {
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
  const mockDispatchFn = jest.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  const mockSelectorFn = jest.fn();
  useSelectorSpy.mockReturnValue(mockSelectorFn);

  render(<MortgageCalculatorPaymentInputs />);
  
  const paymentPlanDOMNode = screen.getByText("Payment Plan");
  expect(paymentPlanDOMNode).toBeInTheDocument();

  const mortgageAmountDOMNode = screen.getByText("Mortgage Amount");
  expect(mortgageAmountDOMNode).toBeInTheDocument();

  const interestRateDOMNode = screen.getByText("Interest Rate");
  expect(interestRateDOMNode).toBeInTheDocument();

  const paymentFrequencyDOMNode = screen.getByText("Payment Frequency");
  expect(paymentFrequencyDOMNode).toBeInTheDocument();

  const termsDOMNode = screen.getByText("Terms");
  expect(termsDOMNode).toBeInTheDocument();

  useDispatchSpy.mockClear();
  useSelectorSpy.mockClear();
});
