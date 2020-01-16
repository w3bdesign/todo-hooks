import React from "react";
import {  Input, Button, Form } from 'antd';

function TodoForm () {
    //const [form] = Form.useForm();
return (
    <div>
        <Form onFinish={() => { alert("Form submitted!") }}>
    <h3>Add TODO</h3>
    <Input placeholder="Enter text here..." />
    <Button
      type="primary"      
      block
    >
      Add
    </Button>
    </Form>
    </div>
);
    }



export default TodoForm;