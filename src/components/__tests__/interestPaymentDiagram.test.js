import { render, screen } from '@testing-library/react';
import InterestPaymentDiagram from '../InterestPaymentDiagram'

test('renders Interest Payment Diagram on screen', () => {
  render(<InterestPaymentDiagram />);
  
  const interestPaymentDOMNode = screen.getByText(/InterestPayment/i);
  expect(interestPaymentDOMNode).toBeInTheDocument();

  const principalPaymentsDOMNode = screen.getByText(/PrincipalPayments/i);
  expect(principalPaymentsDOMNode).toBeInTheDocument();

});
