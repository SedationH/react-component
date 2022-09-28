import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  test('renders Input', () => {
    render(<Input>click me</Input>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
});

