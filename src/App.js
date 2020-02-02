import React, { useState } from 'react';
import './App.css';
import { Table, Row, Col, Popconfirm, Typography, notification } from 'antd';
import 'antd/dist/antd.css';

import TodoForm from './components/Form/form.component';

import uuid from 'uuid';

//import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const { Paragraph } = Typography;

function App() {
  // Add a default TODO when loading the site
  const uniqueID = uuid.v4();
  const [form, setForm] = useState([
    {
      key: 0,
      title: 'Use Hooks in a React application',
      dataIndex: uniqueID
    }
  ]);

  const [todos, setTodos] = useState([...form]);
  const [completed, setCompleted] = useState([
    { key: 0, dataindex: uniqueID, completed: 'false' }
  ]);

  const openNotification = (placement, text) => {
    notification.info({
      message: `${text}`,
      placement
    });
  };

  const handleDelete = (key, dataindex) => {
    const filteredTodos = todos.filter(item => item.key !== key);

    setTodos(filteredTodos);

    const completedToRemove = [...completed];
    completedToRemove.slice(key, 1);
    setCompleted(completedToRemove);

    openNotification('bottomLeft', 'TODO deleted');
  };

  const handleComplete = (key, dataindex) => {
    const messages = [...completed];

    messages.splice(key, 1, {
      key: key,
      dataindex: dataindex,
      completed: 'true'
    });
    setCompleted(messages);

    openNotification('bottomLeft', 'TODO completed');
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => {
        if (typeof completed[record.key] !== 'undefined') {
          return (
            <Paragraph
              className={
                completed[record.key].completed === 'true' ? 'true' : 'false'
              }
            >              
              {text}
            </Paragraph>
          );
        }
      }
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (_, record) =>
        todos.length >= 1 ? (
          <>
            <a
              href="#complete"
              onClick={() => handleComplete(record.key, record.dataIndex)}
            >
              Complete |
            </a>
            |
            <Popconfirm
              title="Are you sure you want to delete?"
              onConfirm={() => handleDelete(record.key, record.dataIndex)}
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
            completed={completed}
            setCompleted={setCompleted}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
