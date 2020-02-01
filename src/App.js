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
    { key: 0 }
    /*{
      key: 0,
      title: 'Use Hooks in a React application ',
      completed: 'False'
    }*/
  ]);

  // TODO Just add initialState to useState below

  const [todos, setTodos] = useState([...form]);

  console.log('Todos:');
  console.log(todos);

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
      render: (text, record) => <Paragraph>{text}</Paragraph>
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => (
        <span>
          <a
            href="#complete"
            onClick={e => {
              openNotification('bottomLeft', 'TODO completed');

              // TODO
              /* Can we refactor to this? 
              this.setState(prevState => ({
                jasper: {
                  // object that we want to update
                  ...prevState.jasper, // keep all other key-value pairs
                  name: 'something' // update the value of specific key
                }
              }));
              */
              // Set TODO to completed. We make sure we keep the title and key intact. We have access to these through value.title and index.
              setTodos(lastState => {
                const list = lastState.map((value, index) => {
                  return {
                    key: index,
                    title: value.title,
                    completed: 'True'
                  };
                });
                return list;
              });
            }}
          >
            <Icon style={{ fontSize: '1.5em', width: '50px' }} type="check" />
          </a>

          <Popconfirm
            title="Are you sure you want to delete this task?"
            onConfirm={() => {
              console.log(`Delete ${record.key}`);
              const newTodos = [...todos];
              const splicedTodo = newTodos.splice(record.key, 1);
              console.log('Lengde:');
              console.log(newTodos.splice(record.key, 1));
              console.log(splicedTodo);

              // console.log(splicedTodo.length);
              if (splicedTodo.length === 0) {
                console.log('Length is 0!');
                /*setTodos([
  {
    key: 0,
    title: 'No TODOs added',
    completed: 'False'
  }
]);*/
              }
              console.log(splicedTodo);
              // setTodos([...todos], {splicedTodo} );

              openNotification('bottomLeft', 'TODO deleted');
              // TODO Make it so we can delete TODOs. Should we do a splice?

              /*
              removePeople(e) {
  var array = [...this.state.people]; // make a separate copy of the array
  var index = array.indexOf(e.target.value)
  if (index !== -1) {
    array.splice(index, 1);
    this.setState({people: array});
  }
},
              */
              // https://www.robinwieruch.de/react-state-array-add-update-remove
            }}
            okText="Yes"
            cancelText="No"
          >
            <a href="#delete">
              <Icon style={{ fontSize: '1.5em', width: '50px' }} type="close" />
            </a>
          </Popconfirm>
        </span>
      )
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
