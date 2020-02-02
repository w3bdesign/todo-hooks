import React, { useState } from 'react';
import './App.css';
import { Table, Row, Col, Popconfirm, Typography, notification } from 'antd';
import 'antd/dist/antd.css';

import TodoForm from './components/Form/form.component';

//import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const { Paragraph } = Typography;

function App() {
  // Add a default TODO when loading the site
  const [form, setForm] = useState([
    {
      key: 1,
      title: 'Use Hooks in a React application'
    }
  ]);

  const [todos, setTodos] = useState([...form]);
  const [completed, setCompleted] = useState([{ key: 1, completed: 'false' }]);

  const openNotification = (placement, text) => {
    notification.info({
      message: `${text}`,
      placement
    });
  };

  const handleDelete = key => {
    const filteredTodos = todos.filter(item => item.key !== key);
    setTodos(filteredTodos);
    console.log("We are deleting: ");
    console.log(key);
    setCompleted({ key: key, completed: 'false' });
    openNotification("bottomLeft", "TODO deleted");
  };

  const handleComplete = key => {
    console.log("We are completing: ");
    console.log(key);
    setCompleted({ key: key, completed: 'true' });
    openNotification("bottomLeft", "TODO completed");
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <Paragraph className={record.key === completed.key ? 'true' : 'false'}>
          {text}
        </Paragraph>
      )
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (_, record) =>
        todos.length >= 1 ? (
          <>
            <a href="#complete" onClick={() => handleComplete(record.key)}>
              Complete |
            </a>
            |
            <Popconfirm
              title="Are you sure you want to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <a href="#delete"> Delete</a>
            </Popconfirm>
          </>
        ) : null
    }
  ];

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
