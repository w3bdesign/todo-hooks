/*

 const findMe = element => element.key === record.key;
  const foundCompleted = completed.find(findMe) ?? 'false';
  const [todos, dispatchTodos] = useContext(TodoContext);
     
      return (
        // Add className to span so we can hide action if completed
        <>
         
          <a
            href="#complete"
            onClick={() => {
              console.log("Click")
              //dispatchTodos({ type: 'COMPLETE_TODO', payload: [record.key, record.dataIndex] })
              //dispatchTodos(record.key, record.dataIndex)
            }            

          >
            <span>Complete | </span>
          </a>

          <Popconfirm title="Are you sure you want to delete?">
            <a href="#delete"> Delete </a>
          </Popconfirm>
          */
/*

 const findMe = element => element.key === record.key;
  const foundCompleted = completed.find(findMe) ?? 'false';
  const [todos, dispatchTodos] = useContext(TodoContext);
     
      return (
        // Add className to span so we can hide action if completed
        <>
         
          <a
            href="#complete"
            onClick={() => {
              console.log("Click")
              //dispatchTodos({ type: 'COMPLETE_TODO', payload: [record.key, record.dataIndex] })
              //dispatchTodos(record.key, record.dataIndex)
            }            

          >
            <span>Complete | </span>
          </a>

          <Popconfirm title="Are you sure you want to delete?">
            <a href="#delete"> Delete </a>
          </Popconfirm>
          */

import React, { useContext } from 'react';
import { Popconfirm } from 'antd';
import { TodoContext } from '../../App';

export const Complete = () => {
  const [todos, dispatchTodos] = useContext(TodoContext);
  console.log('Column todos ........');
 // console.log(todos);
  return (
    <a
      href="#complete"
      onClick={() => {
        console.log(todos);
      }}
    >
      <span>Complete</span>
    </a>
  );
};
