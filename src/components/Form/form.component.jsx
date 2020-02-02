import React from 'react';

import { Input, Button, Form, Icon } from 'antd';

import uuid from 'uuid';

// We destructure the props sent from the parent
function TodoForm({ form, setForm, todos, setTodos, completed, setCompleted }) {
  return (
    <Form
      onSubmit={e => {
        // We have access to the form hook value here
        e.preventDefault();
        const uniqueID = uuid.v4();
        console.log('Adding ...');
        console.log(uniqueID);
        setTodos([
          ...todos,
          {
            title: form,
            //key: todos.length + 1,
            key: todos.length,
            //key: uniqueID,
            dataIndex: uniqueID
          }
        ]);

        const tempComplete = [...completed];

        tempComplete.push({
          key: todos.length,
          dataindex: uniqueID,
          completed: 'false'
        });

        setCompleted(tempComplete);
      }}
    >
      <h3>Add TODO</h3>
      <Form.Item name="todotext">
        <Input
          prefix={<Icon type="tags" className="icon" />}
          onChange={e => {
            // Set state through hooks. Call function though parent component.
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

export default Form.create()(TodoForm);
