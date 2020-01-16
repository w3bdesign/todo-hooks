import React, { useState } from 'react';
import './App.css';
import { Table, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const data = [
  {
    key: '1',
    title: 'Use Hooks in a React application ',
    description: 'Provide more text',
    completed: 'false'
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
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
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
          href="#delete"
          onClick={() => {
            alert('You clicked on delete!');
          }}
        >
          <span role="img" aria-label="delete">
            ❌
          </span>
        </a>
      </span>
    )
  }
];

function App() {
  // <Table dataSource={data} columns={columns} />;

  const [todos, setTodos] = useState([
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',      
    }
  ]);
  //const testDaniel = todos.map(test => {test});
  //console.log(testDaniel);
  // https://next.ant.design/components/table/#components-table-demo-row-selection
  return (
    <div className="App">
      <Table dataSource={data} columns={columns} />
      <br />
      <div className="todo">
      <h3>Add TODO</h3>
      <Input placeholder="Add TODO" />
      <Button type="primary" block>Add</Button>
      </div>
     
    </div>
  );
}

export default App;
