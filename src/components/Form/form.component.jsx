import React from 'react';
import { Input, Button, Form } from 'antd';

function TodoForm() {

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        console.log('Submit from form ....');
        
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
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Add
      </Button>

    </Form>
  );
}

//export default TodoForm;
export default Form.create()(TodoForm)
