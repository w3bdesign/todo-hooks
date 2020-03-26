import React, { useContext } from 'react';
import { TodoContext } from '../../App';

import { Popconfirm } from 'antd';

export const Delete = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={() => {
        dispatchTodos({ type: 'DELETE_TODO', payload: record.key });
      }}
    >
      <a href="#delete">Delete </a>
    </Popconfirm>
  );
};
