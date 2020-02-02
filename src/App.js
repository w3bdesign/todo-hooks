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

    console.log('We are deleting: ');
    console.log(key);
    console.log("Dataindex");
    console.log(dataindex);
   
    const filteredTodos = todos.filter(item => item.key !== key);

    console.log("Filtered TODOs");
    console.log(filteredTodos);

    setTodos(filteredTodos);
    
    const completedToRemove = [...completed];
    completedToRemove.slice(key, 1);
    setCompleted(completedToRemove);
    //setCompleted({ key: key, completed: 'false' });
    openNotification('bottomLeft', 'TODO deleted');
  };

  const handleComplete = (key, dataindex) => {
    console.log('Key from complete ');
    console.log(key);
    console.log("Data index from complete");
    console.log(dataindex);
    //console.log(completed);
    //setCompleted( { key: key, completed: 'true' });
    const messages = [...completed];
   // const index = messages.findIndex(data => data.key === key);


   //messages.push({ key: key, dataindex: dataindex,  completed: 'true' });
   messages.splice(key, 1, { key: key, dataindex: dataindex,  completed: 'true' });
   setCompleted(messages);

    /*if (index === -1) {
      messages.push({ key: key, dataindex: dataindex,  completed: 'true' });
      setCompleted(messages);
    }
    if (index === 0) {
      setCompleted({ key: key, dataindex: dataindex, completed: 'true' });
    }*/

    console.log('Completed after index:');
    console.log(completed);

    //setCompleted( { key: key, completed: 'true' });


    /*
      setCompleted(
        ...completed,
        {
          key: key,
          completed: 'true'
        }
      );*/

    //messages[index] = newMessage;

    // TODO Finish this
    /*setCompleted([
      ...completed,
      {
        key: key,
        completed: 'true'
      }
    ]);*/
    console.log(completed);
    openNotification('bottomLeft', 'TODO completed');
  };
  
// 
  // <Paragraph className={record.key === completed.key ? 'true' : 'false'} >  </Paragraph>
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => {
        
       
        console.log("Record key");
        console.log(record.key);
        console.log("Record dataindex");
        console.log(record.dataIndex);
       // console.log("Completed record key")
       // console.log(completed[record.key].key); 
        //console.log(completed);
       
console.log("Is equal?");
        console.log(record.key === completed.key);       

        
        
       
        
      // const exists = Object.values(completed).indexOf(record.key);
        //console.log(exists);

        if( typeof completed[record.key] !== 'undefined' ) { 

          return (
            <Paragraph className={completed[record.key].completed === "true" ? 'true' : 'false'} > {text} </Paragraph>
          );
      
          }     


        
        
          /*{text}<br/>
          {console.log("Completed fra title: ")}
          {console.log(completed)}
          Record key: {record.key}<br/>
          Completed key: {completed[0].key}<br/>*/
        
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
              onClick={() =>
                //console.log(record.dataIndex)
                //handleComplete(record.key)
                handleComplete(record.key, record.dataIndex)
              }
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
