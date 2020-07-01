import React from 'react';
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
  queryByText,
} from '@testing-library/react';
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
  test('Do not show TODO as completed unless we click on Complete', () => {
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

describe('Ensure we can add new TODOs', () => {
  test('Type some text in title and check that the text is visible', () => {
    const { getByLabelText } = render(<App />);
    const TodoInput = getByLabelText('Title');
    userEvent.type(TodoInput, 'Todotext');
    expect(TodoInput).toHaveValue('Todotext');
  });

  test('Type some text in title and check that the date input is visible', () => {
    const { getByLabelText } = render(<App />);
    const TodoInput = getByLabelText('Title');
    userEvent.type(TodoInput, 'Todotext');
    const DateInput = getByLabelText('Select a date');
    expect(DateInput).toBeVisible();
  });

  test('Check that date input is not visible by default', () => {
    const { queryByText } = render(<App />);
    const DateInput = queryByText('Select a date');
    expect(DateInput).not.toBeInTheDocument();
  });

  test('If we enter the title and dont select a date, check that "Add TODO" is disabled', () => {
    const { getByRole, getByLabelText } = render(<App />);
    const TodoInput = getByLabelText('Title');
    userEvent.type(TodoInput, 'Todotext');
    const AddTodo = getByRole('button', {
      name: /Add TODO/i,
    });
    expect(AddTodo).toBeDisabled();
  });

  test('If we enter the title and click to select a date, check that "Add Todo" is enabled"', async () => {
    const { getByRole, getByLabelText } = render(<App />);
    const TodoInput = getByLabelText('Title');

    userEvent.type(TodoInput, 'Todotext');
    const SelectDateInput = screen.getByPlaceholderText(/select date/i);
    fireEvent.keyDown(SelectDateInput, { key: 'Enter', code: 'Enter' });

    const CalendarDate = screen.getByText(/15/i);    

    fireEvent.click(CalendarDate);

    const AddTodoButton = getByRole('button', {
      name: /Add TODO/i,
    });

    expect(AddTodoButton).toBeEnabled();
  });
});
