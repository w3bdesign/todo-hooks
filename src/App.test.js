import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Table } from 'antd';

test('Renders Add TODO', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Add TODO/i);
  //expect(linkElement).toBeVisible();
  expect(linkElement).toBeInTheDocument();
});
