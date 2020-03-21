import React from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { TagsOutlined } from '@ant-design/icons'; // Icon

import Kalender from '../Calendar/calendar.component';

// Custom Hooks
import useForm from '../../utils/useForm';
import useTodos from '../../utils/useTodos.js';

// Functions
import onFormSubmit from '../../functions/onFormSubmit.js';

// We destructure the props sent from the parent
// We wont need these after the refactoring
const TodoForm = ({
  //form,
  //setForm,
  //todos, //TODO
  //setTodos,
  completed,
  setCompleted,
  date,
  setDate
}) => {
  const [form, handleChange] = useForm();
  const [todos, handleTodos] = useTodos(); //TODO

  return (
    <Form onFinish={onFormSubmit}>
      <h3>
        <b>Add TODO item</b>
      </h3>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Form.Item name="todotext" label="Title">
            <Input
              value={form.name || ''}
              prefix={
                <TagsOutlined /> // Icon
              }
              onChange={
                //setForm(e.target.value);
                handleChange
              }
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
