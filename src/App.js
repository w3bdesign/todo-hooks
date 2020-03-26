/*

Read for inspiration:

https://github.com/dai-shi/react-tracked/blob/master/examples/01_minimal/src/index.js
https://reactjs.org/docs/hooks-reference.html#usecontext
https://reactjs.org/docs/hooks-reference.html#usereducer

*/

import React, { useReducer, createContext } from 'react';
//import { Table, Row, Col, Popconfirm, Typography, Alert } from 'antd';
import { Table, Row, Col, Alert } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import TodoForm from './components/Form/Form.component';
import { todoReducer } from './components/Form/FormReducer';

import { FORM_INITIAL_STATE } from './constants/INITIAL_STATE';
import { FORM_COLUMNS } from './constants/FORM_COLUMNS';

export const TodoContext = createContext();

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, FORM_INITIAL_STATE);

  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      <div className="App">
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Alert
              message="Under development"
              description="Refactoring project to use useReducer and useContext. Last modified: 26-03-2020"
              type="error"
            />
            <br />
            <Table dataSource={todos} columns={FORM_COLUMNS} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <TodoForm todos={todos} dispatchTodos={dispatchTodos} />
          </Col>
        </Row>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
