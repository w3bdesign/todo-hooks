import { v4 as uuidv4 } from 'uuid';

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: 'Use Hooks in a React application (Default TODO from STATE)',
    completed: 'false',
    dataIndex: 0
  }
];

export const COMPLETED_INITIAL_STATE = {
  key: uuidv4(),
  dataindex: 0,
  completed: 'false'
};
