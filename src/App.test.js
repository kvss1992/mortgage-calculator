import { render, screen } from '@testing-library/react';
import * as redux from "react-redux";
import App from './App';

test('renders Canadian Mortgage Calculator link', () => {
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
  const mockDispatchFn = jest.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  const mockSelectorFn = jest.fn();
  useSelectorSpy.mockReturnValue(mockSelectorFn);


  render(<App />);
  const linkElement = screen.getByText(/Canadian Mortgage Calculator/i);
  expect(linkElement).toBeInTheDocument();

  useDispatchSpy.mockClear();
  useSelectorSpy.mockClear();
});
