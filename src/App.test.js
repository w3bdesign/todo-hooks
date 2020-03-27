import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Tests stopped working in AntD v4 so we need to mock window.matchmedia

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

test('Renders Add TODO', () => {
  const { getAllByTestId } = render(<App />);
  const linkElement = getAllByTestId(/todo/i).toString();  
  expect(linkElement[0]).toBe("[");
});
