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
      key: uniqueID,
      title: 'Use Hooks in a React application (Default TODO)',
      dataIndex: 0
    }
  ]);

  const [todos, setTodos] = useState([...form]);
  const [completed, setCompleted] = useState([
    {
      key: uniqueID,
      dataindex: 0,
      completed: 'false'
    }
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

    completedToRemove.splice(dataindex, 1, {
      key: key,
      dataindex: dataindex,
      completed: 'false'
    });

    setCompleted(completedToRemove);
    openNotification('bottomLeft', 'TODO deleted');
  };

  const handleComplete = (key, dataindex) => {
    // We need to search for the element by key (uniqueID) in completed array and return the index
    // This way we can be sure we complete the correct item

    const findMe = element => element.key === key;
    const searchCompleted = completed.findIndex(findMe);

    // We keep an array of completed TODOs and store the unique key (from uniqueID)
    const messages = [...completed];
    messages.splice(searchCompleted, 1, {
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
        // Search for key (uniqueID) in completed TODOs array
        const findMe = element => element.key === record.key;
        const foundCompleted = completed.find(findMe) ?? 'false';
        return (
          <Paragraph
            className={
              // Display text-decoration: line-through if TODO is completed (true)
              foundCompleted.completed === 'true' ? 'true' : 'false'
            }
          >
            {text}
          </Paragraph>
        );
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
            <Popconfirm
              title="Are you sure you want to delete?"
              onConfirm={() => handleDelete(record.key, record.dataIndex)}
            >
              <a href="#delete"> Delete </a>
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
