import React, { useContext } from 'react';
import { TodoContext } from '../../App';

export const Complete = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#complete"
      onClick={() => {
        dispatchTodos({ type: 'COMPLETE_TODO', payload: record.key });
      }}
    >
      <span>Complete</span>
    </a>
  );
};
