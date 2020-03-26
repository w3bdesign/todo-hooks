import React, { useContext } from 'react';
import { TodoContext } from '../../App';

export const Delete = ({ record }) => {
  const [todos, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#delete"
      onClick={() => {
        //dispatchTodos({ type: 'DELETE_TODO', payload: record.key });
      }}
    >
      <span>Delete</span>
    </a>
  );
};
