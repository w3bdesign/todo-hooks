import React, { useState, useContext } from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { TagsOutlined } from '@ant-design/icons'; // Icon

import { openNotification } from '../../functions/openNotification';

//import Calendar from '../Calendar/calendar.component';

import { TodoContext } from '../../App';

const TodoForm = () => {
  const [form, setForm] = useState();
  const [todos, dispatchTodos] = useContext(TodoContext);

  return (
    <>
      <Form
        onFinish={() => {
          if (form && form.length >= 5) {
            console.log(form);
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
            <Form.Item label="Title">
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
            <Form.Item label="Date picker">
              { //<Calendar onChange={() => console.log('Change!')} /> 
              }
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
