import React from 'react';

import { Input, Button, Form, Icon } from 'antd';

// We destructure the props sent from the parent

function TodoForm({ form, setForm, todos, setTodos }) {
  return (
    <Form
      onSubmit={e => {
        /*
{
      key: '1',
      title: 'Use Hooks in a React application ',
      completed: 'False'
    }
        */
        // We have access to the form hook value here
        e.preventDefault();

        //setForm(...form, e.target.value);
        console.log('Logging value after form submit: ');
        console.log(form);
        console.log('Todos length');
        console.log(todos.length);
        setTodos([
          ...todos,
          {
            title: form,
            key: todos.length + 1,
            completed: 'False'
          }
        ]);

        console.log('Todos after form submit');
        console.log(todos);
      }}
    >
      <h3>Add TODO</h3>

      <Form.Item name="todotext">
        <Input
          prefix={<Icon type="tags" className="icon" />}
          onChange={e => {
            // Set state through hooks.
            // Call function though parent component.
            setForm(e.target.value);
            // console.log("Log after change");
            // console.log(form)

            //setForm(form);
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
