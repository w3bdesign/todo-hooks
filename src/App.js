import React, { useState } from 'react';
import './App.css';
import { Table, Row, Col } from 'antd';
import 'antd/dist/antd.css';

import TodoForm from "./components/Form/form.component";

const data = [
  {
    key: '1',
    title: 'Use Hooks in a React application ',
    completed: 'False'
  }
];

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <span>{text}</span>
  },
  {
    title: 'Completed',
    dataIndex: 'completed',
    key: 'completed'
  },

  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a
          href="#complete"
          onClick={() => {
            alert('Complete clicked!');
          }}
        >
          <span className="action-v">V</span>
        </a>

        <a
          href="#delete"
          onClick={() => {
            alert('You clicked on delete!');
          }}
        >
          <span className="action-x">X</span>
        </a>
      </span>
    )
  }
];

function AddTodo({ text }) {
  
  const [todo, addTodo] = useState('');
}

function App() {
  const [form, setForm] = useState("");

  const [todos, setTodos] = useState([
    {
      key: '1',
      title: 'Use Hooks in a React application ',
      completed: 'False'
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = 'true';
    setTodos(newTodos);
  };
 
  console.log("Update form ....");
  console.log(form);

  return (
    <div className="App">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={data} columns={columns} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <h3>TODO hook:</h3>
          {}
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <TodoForm form={form} setForm={setForm}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
