import { render, screen } from '@testing-library/react';
import Child from './Child';

test('renders Expense Tracker link', () => {
  render(<Child />);
  const linkElement = screen.getByText(/Expense Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
