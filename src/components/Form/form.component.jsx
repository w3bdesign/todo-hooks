import React from 'react';
import { Input, Button, Form } from 'antd';

// We destructure the props sent from the parent

function TodoForm({ form, setForm }) {
  return (
    <Form
      onSubmit={e => {
        // We have access to the form hook value here
        e.preventDefault();
        console.log('Logging value after form submit: ');
        console.log(form);
      }}
    >
      <h3>Add TODO</h3>

      <Form.Item
        name="todotext"        
      >
        <Input
          onChange={e => {
            // Set state through hooks. 
            // Call function though parent component.
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
