import React, { useState, useContext } from 'react';
import { Button, Form, Row } from 'antd';

import { openNotification } from '../../functions/openNotification';

import { Calendar } from './Calendar.component';
import { FormInput } from './FormInput.component';
import { FormHeader } from './FormHeader.component';

import { TodoContext } from '../../App';

export const TodoForm = () => {
  const [form, setForm] = useState();
  const [date, setDate] = useState();

  const [todos, dispatchTodos] = useContext(TodoContext);

  const hasDate = date ? true : false;

  const formSubmit = () => {
    console.log('Form submit ....');
    console.log('Form:');
    console.log(form);
    console.log('Date:');
    console.log(date);
    console.log('End form submit ....');
    if (form && date && form.length >= 5) {
      dispatchTodos({ type: 'ADD_TODO', payload: [form, date] });
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
          {form && form.length >= 5 ? <Calendar setDate={setDate} /> : null}
          {form && form.length < 5 ? (
            <h3>Title length must be more than 5</h3>
          ) : null}
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block disabled={!hasDate}>
            Add TODO
          </Button>
          {
            // DEBUG
          }
          <Button
            type="primary"
            block
            onClick={() => {
              console.log('Todos:');
              console.log(todos);
              console.log('Form:');
              console.log(form);
              console.log('Date:');
              console.log(date);
              console.log('hasDate:');
              console.log(hasDate);
            }}
          >
            DEBUG Todos | DEBUG form | DEBUG date | DEBUG hasDate
          </Button>
        </Row>
      </Form>
    </>
  );
};
