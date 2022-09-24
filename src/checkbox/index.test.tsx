import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './index';

describe('Checkbox', () => {
  test('renders Checkbox', () => {
    render(<Checkbox>click me</Checkbox>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
});

