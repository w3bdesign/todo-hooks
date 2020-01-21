import React, { useState } from 'react';
import './App.css';
import { Table, Row, Col, Popconfirm, Typography } from 'antd';
import 'antd/dist/antd.css';

import TodoForm from './components/Form/form.component';

const { Paragraph } = Typography;

// TODO render a component here instead of a span?

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text =>  <Paragraph>{text}</Paragraph>
  },
  {
    title: 'Completed',
    dataIndex: 'completed',
    key: 'completed'
  },

  {
    title: 'Action',
    key: 'action',
    dataIndex: "action",
    render: (text, record) => (
      <span>
        <a
          href="#complete"          
          onClick={(e) => {
            
            
            alert('Complete clicked!');
            console.log(record.key)
            
            //e.currentTarget.setAttribute("completed", true);
           
          }}
        >
          <span className="action-v">V</span>
        </a>

       
        
          <Popconfirm
    title="Are you sure you want to delete this task?"   
    onConfirm={() => {alert("You clicked yes to delete!") }} 
    okText="Yes"
    cancelText="No"
  > 
    <a href="#delete"><span className="action-x">X</span></a>
  </Popconfirm>
        
      </span>
    )
  }
];

function App() {
  const [form, setForm] = useState([
    {
      key: '1',
      title: 'Use Hooks in a React application ',
      completed: 'False'
    }
  ]);

  const [todos, setTodos] = useState([...form]);

  /*const addTodo = text => {
    const newData = [...form, text];
    setTodos(newData);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = 'true';
    setTodos(newTodos);
  };*/

  console.log('Update form ....');  
  console.log("Todos from App.js ...");
  console.log(todos)
  if (form) {    
    console.log(form);
  }

  return (
    <div className="App">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={todos} columns={columns} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <TodoForm form={form} setForm={setForm} todos={todos} setTodos={setTodos} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
