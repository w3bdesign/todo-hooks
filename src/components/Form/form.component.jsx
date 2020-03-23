import React from 'react';
import { Input, Button, Form } from 'antd';
import { TagsOutlined } from '@ant-design/icons';
import { openNotification } from './../../functions/functions';
import { v4 as uuidv4 } from 'uuid';

// We destructure the props sent from the parent
function TodoForm({ form, setForm, todos, setTodos, completed, setCompleted }) {
  return (
    <Form
    // was onSubmit
    onFinish={e => {
        // We have access to the form hook value here
        //e.preventDefault();
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
      <h3>Add TODO</h3>
      <Form.Item name="todotext">
        <Input
          prefix={<TagsOutlined />}
          onChange={e => {
            // Set state through hooks. Call function though parent component.
            // Look into useCallback here: // TODO
            // https://www.youtube.com/watch?v=-Ls48dd-vJE // TODO
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

//export default Form.create()(TodoForm);
export default TodoForm;
