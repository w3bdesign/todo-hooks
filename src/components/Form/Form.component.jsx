import React, { useState, useContext } from 'react';
import { Button, Form, Row } from 'antd';

import { openNotification } from '../../functions/openNotification';

import { Calendar } from './Calendar.component';
import { FormInput } from './FormInput.component';
import { FormHeader } from './FormHeader.component';

import { TodoContext } from '../../App';

export const TodoForm = () => {
  const [form, setForm] = useState();
  const [todos, dispatchTodos] = useContext(TodoContext);

  const formSubmit = () => {
    console.log('Form:');
    console.log(form);
    if (form && form.length >= 5) {
      dispatchTodos({ type: 'ADD_TODO', payload: form });
    } else {
      openNotification('bottomLeft', 'Title must be a minimum of 5 letters');
    }
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <FormHeader />
        <Row type="flex" justify="center">
          <FormInput setForm={setForm} />
          {form && form.length >= 5 ? <Calendar setForm={setForm} /> : null}
          {form && form.length < 5 ? (
            <h3> Title length must be more than 5</h3>
          ) : null}
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block>
            Add TODO
          </Button>
          {
            // DEBUG
          }
          <Button
            type="primary"
            htmlType="submit"
            block
            onClick={() => console.log(todos)}
          >
            DEBUG Todos
          </Button>
        </Row>
      </Form>
    </>
  );
};
