import uuid from 'uuid';
const uniqueID = uuid.v4();

export const FORM_INITIAL_STATE = {
  key: uniqueID,
  title: 'Use Hooks in a React application (Default TODO)',
  dataIndex: 0
};

export const COMPLETED_INITIAL_STATE = {
  key: uniqueID,
  dataindex: 0,
  completed: 'false'
};
