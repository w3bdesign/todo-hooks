import React, { useState, useContext } from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { TagsOutlined } from '@ant-design/icons';

import { openNotification } from '../../functions/openNotification';

//import Calendar from '../Calendar/calendar.component';

import { TodoContext } from '../../App';

export const TodoForm = () => {
  const [form, setForm] = useState();
  const [, dispatchTodos] = useContext(TodoContext);

  return (
    <>
      <Form
        onFinish={() => {
          if (form && form.length >= 5) {
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
          <b data-testid="todo">Add TODO item</b>
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
              {
                //<Calendar onChange={() => console.log('Change!')} />
              }
            </Form.Item>
          </Col>
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
