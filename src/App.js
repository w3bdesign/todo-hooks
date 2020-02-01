import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Table,
  Row,
  Col,
  Popconfirm,
  Typography,
  notification,
  Icon
} from 'antd';
import 'antd/dist/antd.css';

import TodoForm from './components/Form/form.component';

//import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const { Paragraph } = Typography;

// TODO render a component here instead of a span?
// Replaced <span> {text} </span with this: https://ant.design/components/typography/

const openNotification = (placement, text) => {
  notification.info({
    message: `${text}`,
    placement
  });
};

function App() {
  const [form, setForm] = useState([
    {
      key: 0,
      title: 'Use Hooks in a React application ',
      completed: 'False'
    }
  ]);

  const [todos, setTodos] = useState([...form]);

  const handleDelete = key => {
    const filteredTodos = todos.filter(item => item.key !== key);
    setTodos(filteredTodos);
  };

  const handleConfirm = key => {
    // TODO Implement this
    console.log("Complete!");

    /*
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
    */
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <Paragraph className={record.key}>{text}</Paragraph>
      )
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      render: (text, _) => <Paragraph>{text}</Paragraph>
    },
    {
      title: 'Action',
      key: 'complete',
      dataIndex: 'complete',
      render: (_, record) =>
        todos.length >= 1 ? (
          <Popconfirm
            title="Not implemented yet ...."
            onConfirm={() => handleConfirm(record.key)}
          >
            <a href="#confirm">Confirm</a>
          </Popconfirm>
        ) : null
    },
    {
      title: 'Action',
      key: 'delete',
      dataIndex: 'delete',
      render: (_, record) =>
        todos.length >= 1 ? (
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a href="#delete">Delete</a>
          </Popconfirm>
        ) : null
    }
  ];

  console.log('Update form ....');
  console.log('Todos from App.js ...');
  console.log(todos);
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
          <TodoForm
            form={form}
            setForm={setForm}
            todos={todos}
            setTodos={setTodos}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
