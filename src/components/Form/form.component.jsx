import React, { useState } from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { TagsOutlined } from '@ant-design/icons'; // Icon

import { openNotification } from '../../functions/openNotification';

import Calendar from '../Calendar/calendar.component';

// Custom Hooks
//import useForm from '../../utils/useForm';
//import useTodos from '../../utils/useTodos.js';

// Functions
import { FormSubmit } from './FormSubmit';

import TodoContext from '../../App';

// We destructure the props sent from the parent
// We wont need these after the refactoring
const TodoForm = ({ todos, dispatchTodos }) => {
  //const [form, handleChange] = useForm();
  //const [todos, handleTodos] = useTodos(); //TODO

  //const dispatch = useContext(TodoContext);
  const [form, setForm] = useState();

  return (
    <>
      <Form
        onFinish={() => {
          if (form) {
            dispatchTodos({ type: 'ADD_TODO', payload: form });
          } else {
            openNotification(
              'bottomLeft',
              'Title must be a minimum of 5 letters'
            );
          }
        }}
      >
        <h3>
          <b>Add TODO item</b>
        </h3>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item name="todotext" label="Title">
              <Input
                prefix={
                  <TagsOutlined /> // Icon
                }
                onChange={e => {
                  setForm(e.target.value);
                }}
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item name="calendar" label="Date picker">
              <Calendar onChange={() => console.log('Change!')} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Row>
      </Form>

      <Button type="primary" onClick={() => console.log(todos)}>
        console.log todos value
      </Button>
    </>
  );
};

export default TodoForm;
