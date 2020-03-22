/*
Read for inspiration:

https://github.com/dai-shi/react-tracked/blob/master/examples/01_minimal/src/index.js

https://reactjs.org/docs/hooks-reference.html#usecontext
https://reactjs.org/docs/hooks-reference.html#usereducer

*/

import React, {  useReducer, useContext } from 'react';
//import { Table, Row, Col, Popconfirm, Typography, Alert } from 'antd';
import { Table, Row, Col, Alert } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import TodoForm from './components/Form/form.component';
import { todoReducer } from './components/Form/FormReducer';

import { FORM_INITIAL_STATE } from './constants/INITIAL_STATE';
import { FORM_COLUMNS } from './constants/FORM_COLUMNS';

const App = () => {
  //const [customtodos, setcustomTodos] = useTodos([FORM_INITIAL_STATE], "test" );
  const [state, dispatch] = useReducer(todoReducer, FORM_INITIAL_STATE); // TODO Should we move this to the form component?

  const TodoContext = React.createContext();

  const dataSource = [
    {
      key: '1',
      title: 'Title 1',
      date:  "Date",
      action: 'First Action'
    },
    {
      key: '2',
      title: 'Title 2',
      date: "Date",
      action: 'Second Action'
    }
  ];

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
    <div className="App">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Alert
            message="In development"
            description="Please remove me when done"
            type="error"
          />
          <br />
          <Table dataSource={dataSource} columns={FORM_COLUMNS} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <TodoForm
          // TODO Replace prop drilling with useReducer
          />
        </Col>
      </Row>
    </div>
    </TodoContext.Provider>
  );
};

export default App;
