import React, { useContext } from 'react';
import { TodoContext } from '../../App';

import { Button } from 'antd';

export const Complete = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#complete"
      onClick={() => {
        dispatchTodos({ type: 'COMPLETE_TODO', payload: record.key });
      }}
    >
      <Button type="primary">Complete</Button>
    </a>
  );
};
