import { render, screen } from '@testing-library/react';
import * as redux from "react-redux";
import CalculationTable from '../calculationTable';

test('renders Calculate Table on screen', () => {
  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  const mockSelectorFn = jest.fn();
  useSelectorSpy.mockReturnValue(mockSelectorFn);

  render(<CalculationTable />);
  const numberOfPaymentDOMNode = screen.getByText(/Number of Payments/i);
  expect(numberOfPaymentDOMNode).toBeInTheDocument();
  const mortgagePaymentDOMNode = screen.getByText(/Mortgage Payment/i);
  expect(mortgagePaymentDOMNode).toBeInTheDocument();
  const prepaymetDOMNode = screen.getByText(/Prepayment/i);
  expect(prepaymetDOMNode).toBeInTheDocument();
  const principalPaymentsDOMNode = screen.getByText(/Principal Payments/i);
  expect(principalPaymentsDOMNode).toBeInTheDocument();
  const interestPaymentsDOMNode = screen.getByText(/Interest Payments/i);
  expect(interestPaymentsDOMNode).toBeInTheDocument();
  const totalCostDOMNode = screen.getByText(/Total Cost/i);
  expect(totalCostDOMNode).toBeInTheDocument();

  useSelectorSpy.mockClear();
});
