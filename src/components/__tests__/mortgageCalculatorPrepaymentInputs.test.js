import { render, screen } from '@testing-library/react';
import MortgageCalculatorPrePaymentInputs from '../MortgageCalculatorPrePaymentInputs'

test('renders Mortgage Calculator Payment Inputs on screen', () => {
  render(<MortgageCalculatorPrePaymentInputs />);
  
  const prepaymentPlanDOMNode = screen.getByText("Prepayment Plan");
  expect(prepaymentPlanDOMNode).toBeInTheDocument();

  const prepaymentAmountDOMNode = screen.getByLabelText("Prepayment Amount:");
  expect(prepaymentAmountDOMNode).toBeInTheDocument();

  const prepaymentFrequencyDOMNode = screen.getByText("Prepayment Frequency:");
  expect(prepaymentFrequencyDOMNode).toBeInTheDocument();

  const startWithPaymentDOMNode = screen.getByText("Start With Payment:");
  expect(startWithPaymentDOMNode).toBeInTheDocument();

});
