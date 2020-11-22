import { v4 as uuidv4 } from 'uuid';

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: 'Use Hooks in a React application (Default TODO from INITIAL_STATE.js)',
    date: new Date().toISOString().slice(0,10),
    completed: 'false',
    dataIndex: 0,
  },
];
