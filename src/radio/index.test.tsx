import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './index';

describe('Radio', () => {
  test('renders Radio', () => {
    render(<Radio>click me</Radio>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
});

