import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('inputs should be initially empty', () => {
  render(<Contact />);
  const nameInputElement = screen.getByRole('textbox');
});