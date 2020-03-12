/*
Read these for inspiration:

https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
https://www.freecodecamp.org/news/how-to-build-a-todo-list-with-react-hooks-ebaa4e3db3b/
https://www.pusher.com/tutorials/todo-app-react-hooks
https://medium.com/javascript-in-plain-english/how-to-build-a-todo-list-app-with-react-hooks-and-typescript-b9cbdc61e966
https://medium.com/@anjubudhwan/create-todo-app-using-react-hooks-1048f74bd4a7
https://codesandbox.io/s/ql2y86xz6j
https://blog.bitsrc.io/quickly-compose-a-react-todo-app-using-hooks-and-bit-c757df90a7ff
*/

import React, { useState } from 'react';
import './App.css';
import { Table, Row, Col, Popconfirm, Typography } from 'antd';
import 'antd/dist/antd.css';

import TodoForm from './components/Form/form.component';

import {
  FORM_INITIAL_STATE,
  COMPLETED_INITIAL_STATE
} from './constants/INITIAL_STATE';

import { openNotification } from './functions/functions';

//import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // TODO

const { Paragraph } = Typography;

const App = () => {
  // TODO Refactor into a useReducer hook?
  const [form, setForm] = useState([FORM_INITIAL_STATE]);
  const [todos, setTodos] = useState([...form]);
  const [completed, setCompleted] = useState([COMPLETED_INITIAL_STATE]);
  const [date, setDate] = useState([]);

  // https://stackoverflow.com/questions/46138145/functions-in-stateless-components // TODO = Move functions outside of App()

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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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
      render: (_, record) => {
        const findMe = element => element.key === record.key;
        const foundCompleted = completed.find(findMe) ?? 'false';

        return (
          // Add className to span so we can hide action if completed
          <>
            <a
              href="#complete"
              onClick={() => handleComplete(record.key, record.dataIndex)}
            >
              <span
                className={
                  foundCompleted.completed === 'true' ? 'hideaction' : ''
                }
              >
                Complete |{' '}
              </span>
            </a>

            <Popconfirm
              title="Are you sure you want to delete?"
              onConfirm={() => handleDelete(record.key, record.dataIndex)}
            >
              <a href="#delete"> Delete </a>
            </Popconfirm>
          </>
        );
      }
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
            date={date}
            setDate={setDate}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
