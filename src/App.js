import React, { useState } from 'react';
import './App.css';
import { Table, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';

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
            alert('You clicked on complete!');
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

function App() {  

  const [todos, setTodos] = useState([
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    }
  ]);
  //const testDaniel = todos.map(test => {test});
  //console.log(testDaniel);
  // https://next.ant.design/components/table/#components-table-demo-row-selection
  return (
    <div className="App">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={data} columns={columns} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <h3>Add TODO</h3>
          <Input placeholder="Add TODO" />
          <Button
            type="primary"
            onClick={() => {
              todos.map(test => console.log(test));
            }}
            block
          >
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
