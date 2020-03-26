import React, { useContext } from 'react';
import { Typography } from 'antd';

import { TodoContext } from '../../App';

const { Paragraph } = Typography;

export const Title = ({ children, record }) => {
  const [todos, dispatchTodos] = useContext(TodoContext);

  console.log('Title');
  console.log(record.key);

  //const foundCompleted = todos.find(record.key) ?? 'false';
  //console.log(todos.find(record.key));

  const findMe = element => element.key === todos.key;
  const foundCompleted = todos.find(findMe) ?? 'false';

  return <Paragraph className="true">{children}</Paragraph>;
};
