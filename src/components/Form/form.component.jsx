import React from 'react';
import { Input, Button, Form } from 'antd';

// We destructure the props sent from the parent

function TodoForm({ form, setForm }) {
  return (
    <Form
      onSubmit={e => {
        // We have access to form here
        e.preventDefault();
        console.log('Logging value after form submit: ');
        console.log(form);
      }}
    >
      <h3>Add TODO</h3>

      <Form.Item
        name="todotext"
        rules={[
          {
            required: true,
            message: 'Please input text!'
          }
        ]}
      >
        <Input
          onChange={e => {
            setForm(e.target.value);
          }}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Add
      </Button>
    </Form>
  );
}

//export default TodoForm;
export default Form.create()(TodoForm);
