import React, { useState, useContext } from 'react';
import { Button, Form, Row } from 'antd';

import { openNotification } from '../../functions/openNotification';
import { Calendar } from '../Calendar/Calendar.component';
import { FormInput } from '../Form/FormInput.component';
import { TodoContext } from '../../App';

export const TodoForm = () => {
  const [form, setForm] = useState();
  const [, dispatchTodos] = useContext(TodoContext);

  const formSubmit = () => {
    if (form && form.length >= 5) {
      dispatchTodos({ type: 'ADD_TODO', payload: form });
    } else {
      openNotification('bottomLeft', 'Title must be a minimum of 5 letters');
    }
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <h3>
          <b data-testid="todo">Add TODO item</b>
        </h3>
        <Row type="flex" justify="center">
          <FormInput setForm={setForm}/>
          <Calendar />
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block>
            Add TODO
          </Button>
        </Row>
      </Form>
    </>
  );
};
