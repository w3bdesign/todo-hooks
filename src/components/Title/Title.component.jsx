import React, { useContext } from 'react';
import { Typography } from 'antd';

import { TodoContext } from '../../App';

const { Paragraph } = Typography;

export const Title = ({ children, record }) => {
  //const [todos, dispatchTodos] = useContext(TodoContext);
  //const [todos] = useContext(TodoContext);



  //const foundCompleted = todos.find(record.key) ?? 'false';
  //console.log(todos.find(record.key));

  //const findMe = element => element.key === todos.key;
  //console.log("Record completed: ");
  //console.log(todos.completed);
  //console.log(record.completed);

  //const foundCompleted = todos.find(findMe) ?? 'false';
  //console.log(foundCompleted);

  //  foundCompleted.completed === 'true' ? 'true' : 'false'

  return <Paragraph  className={
    // Display text-decoration: line-through if TODO is completed (true)
    record.completed === 'true' ? 'true' : 'false'
  }>{children}</Paragraph>;
};
