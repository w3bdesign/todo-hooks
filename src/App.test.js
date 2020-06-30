import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Tests stopped working in AntD v4 so we need to mock window.matchmedia

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Check for existing text strings on page', () => {
  test('Complete is in the document', () => {
    const { getByRole } = render(<App />);
    const CompleteButton = getByRole('button', { name: /Complete/i });
    expect(CompleteButton).toBeInTheDocument();

    //screen.debug()
  });

  test('Use Hooks in a React application is in the document', () => {
    const { getByRole } = render(<App />);
    const UseHooks = getByRole('row', { name: /Use Hooks in a React/i });
    expect(UseHooks).toBeInTheDocument();
  });
});

describe('Verify that click actions work', () => {
  test('Click on Complete and show TODO as completed', () => {
    const { getByRole } = render(<App />);
    const CompleteButton = getByRole('button', { name: /Complete/i });
    const UseHooks = getByRole('heading', { name: /Use Hooks in a React/i });
    userEvent.click(CompleteButton);
    expect(UseHooks.className).toContain('true');
  });
  test('Do not click on Complete and do not show TODO as completed', () => {
    const { getByRole } = render(<App />);
    const UseHooks = getByRole('heading', { name: /Use Hooks in a React/i });
    expect(UseHooks.className).toContain('false');
  });

  test('Click on Delete and check if TODO is no longer visible', () => {
    const { getByRole } = render(<App />);
    const DeleteButton = getByRole('button', { name: /Delete/i });
    const UseHooks = getByRole('heading', { name: /Use Hooks in a React/i });
    // First we click on Delete, then we click on Confirm
    userEvent.click(DeleteButton);
    const ConfirmDelete = getByRole('button', {
      name: /OK/i,
    });
    userEvent.click(ConfirmDelete);
    expect(UseHooks).not.toBeInTheDocument();
  });

  test('Click on Delete, click Cancel and check if TODO is still visible', () => {
    const { getByRole } = render(<App />);
    const DeleteButton = getByRole('button', { name: /Delete/i });
    const UseHooks = getByRole('heading', { name: /Use Hooks in a React/i });
    // First we click on Delete, then we click on Cancel
    userEvent.click(DeleteButton);
    const CancelDelete = getByRole('button', {
      name: /Cancel/i,
    });
    userEvent.click(CancelDelete);
    expect(UseHooks).toBeInTheDocument();
  });
});
