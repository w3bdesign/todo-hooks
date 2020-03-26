import React, { useContext } from 'react';
import { Typography } from 'antd';

import { TodoContext } from '../../App';

const { Paragraph } = Typography;

export const Title = (props) => {
    const [todos, dispatchTodos] = useContext(TodoContext);
    console.log("Title todos: ");

    console.log(todos);
    // const findMe = element => element.key === record.key;
    // const foundCompleted = completed.find(findMe) ?? 'false';
    return (
        <Paragraph className="true">{props.children}</Paragraph>
    );
  };