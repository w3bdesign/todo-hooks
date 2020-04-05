import React, { useReducer, createContext } from 'react';
import { Table, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import { TodoForm } from './components/Form/Form.component';
import { Google } from './components/Form/Google.component';

import { todoReducer } from './utils/functions/formReducer';
//import { firebaseContext } from './utils/firebase/firebaseContext';
import Firebase, { FirebaseContext } from './utils/firebase/';

import { FORM_INITIAL_STATE } from './utils/constants/INITIAL_STATE';
import { FORM_COLUMNS } from './utils/constants/FORM_COLUMNS';

export const TodoContext = createContext();

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, FORM_INITIAL_STATE);
  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      <FirebaseContext.Provider value={new Firebase()}>
      <Google />
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={todos} columns={FORM_COLUMNS} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <TodoForm />
        </Col>
      </Row>
      </FirebaseContext.Provider>
    </TodoContext.Provider>
  );
};
export default App;
