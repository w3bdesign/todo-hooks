import React, { useState, useContext } from 'react';
import { Button, Form, Row, Typography } from 'antd';

import { openNotification } from '../../utils/functions/openNotification';

import { Calendar } from './Calendar.component';
import { FormInput } from './FormInput.component';

import { TodoContext } from '../../App';

const { Title } = Typography;

export const TodoForm = () => {
  // Could replace useState with useReducer but I decided to keep things simple
  const [form, setForm] = useState();
  const [date, setDate] = useState();
  const [, dispatchTodos] = useContext(TodoContext);

  const hasDate = date ? true : false;

  const formSubmit = () => {
    if (form && date && form.length >= 5) {
      dispatchTodos({ type: 'ADD_TODO', payload: [form, date] });
    } else {
      openNotification('bottomLeft', 'Title must be a minimum of 5 letters');
    }
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <Title data-testid="todo" level={4}>
          Add TODO item
        </Title>
        <Row type="flex" justify="center">
          <FormInput data-testid="todo" setForm={setForm} />
          {form && form.length >= 5 ? <Calendar setDate={setDate} /> : null}
          {form && form.length < 5 ? (
            <Title className="TitleLength" type="danger" level={4}>Length must be more than 5</Title>
          ) : null}
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block disabled={!hasDate}>
            Add TODO
          </Button>
        </Row>
      </Form>
    </>
  );
};
