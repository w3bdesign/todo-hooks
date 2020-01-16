import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders Add TODO', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Add TODO/i);  
  expect(linkElement).toBeInTheDocument();
});
