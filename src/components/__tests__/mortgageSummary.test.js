import { render, screen } from '@testing-library/react';
import * as redux from "react-redux";
import MortgageSummary from '../MortgageSummary'

test('renders Mortgage Calculator Payment Inputs on screen', () => {
  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  const mockSelectorFn = jest.fn();
  useSelectorSpy.mockReturnValue(mockSelectorFn);

  render(<MortgageSummary />);
  
  const mortgageSummaryDOMNode = screen.getByText("Mortgage Summary");
  expect(mortgageSummaryDOMNode).toBeInTheDocument();

  const headlineDOMNode = screen.getByText("Over the 25-year amortization period, you will:");
  expect(headlineDOMNode).toBeInTheDocument();

  useSelectorSpy.mockClear();

});
