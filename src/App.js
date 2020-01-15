import React from 'react';
import './App.css';
import { Table } from 'antd';
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
        <a href="#delete">
          <span role="img" aria-label="delete">
            ❌
          </span>
        </a>
      </span>
    )
  }
];

function App() {
  return (
    <div className="App">
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default App;
