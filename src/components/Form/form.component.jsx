import React from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { TagsOutlined } from '@ant-design/icons'; // Icon
import { openNotification } from './../../functions/functions';
import { v4 as uuidv4 } from 'uuid';

import Kalender from '../Calendar/calendar.component';

// We destructure the props sent from the parent
const TodoForm = ({
  form,
  setForm,
  todos,
  setTodos,
  completed,
  setCompleted,
  date,
  setDate
}) => {
  return (
    <Form
      onFinish={e => {
        const uniqueID = uuidv4();
        const addTodo = [...todos];

        if (form.length < 5) {
          openNotification(
            'bottomLeft',
            'Title must be a minimum of 5 letters'
          );
        } else {
          addTodo.push({
            key: uniqueID,
            title: form,
            dataIndex: todos.length
          });
          setTodos(addTodo);

          const tempComplete = [...completed];

          tempComplete.push({
            key: uniqueID,
            dataindex: todos.length,
            completed: 'false'
          });

          setCompleted(tempComplete);
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
            <Kalender onChange={setDate} />
          </Form.Item>
        </Col>

      </Row>

      <Row>
        <Button type="primary" htmlType="submit" block>
          Add
        </Button>
      </Row>
    </Form>
  );
};

export default TodoForm;
