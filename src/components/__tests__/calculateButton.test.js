import { render, screen } from '@testing-library/react';
import * as redux from "react-redux";
import CalculateButton from '../CalculateButton';

test('renders Calculate Button on screen', () => {
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
  const mockDispatchFn = jest.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  render(<CalculateButton />);
  const linkElement = screen.getByText(/CALCULATE../i);
  expect(linkElement).toBeInTheDocument();

  useDispatchSpy.mockClear();
});
