import React from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { TagsOutlined } from '@ant-design/icons'; // Icon
import { openNotification } from '../../functions/openNotification';
import { v4 as uuidv4 } from 'uuid';

import Kalender from '../Calendar/calendar.component';

import useForm from '../../utils/useForm';
import useTodos from "../../utils/useTodos.js";


// We destructure the props sent from the parent
const TodoForm = ({
  //form,
  //setForm,
  //todos,
  //setTodos,
  completed,
  setCompleted,
  date,
  setDate
}) => {
  const [form, handleChange] = useForm();
  const [todos, handleTodos] = useTodos();

  return (
    <Form
      onFinish={e => {       
        // TODO
        //onFormSubmit

      }}
    >
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
