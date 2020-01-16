import React from 'react';
import { Input, Button, Form } from 'antd';

function TodoForm() {
  //const [form] = Form.useForm();
  return (
    <Form
    onSubmit={() => {
        alert('Form submitted in onSubmit!');
      }}
      // TODO onFinish is not working?
      onFinish={() => {
        alert('Form submitted!');
      }}
    >
      <h3>Add TODO</h3>      
      <Form.Item       
        name="todotext"
        rules={[
          {
            required: true,
            message: 'Please input text!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button type="primary" block>
        Add
      </Button>
    </Form>
  );
}

export default TodoForm;
