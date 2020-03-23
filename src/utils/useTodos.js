import { useState } from 'react';

const useTodos = (defaultState, action) => {
  const [todos, setTodos] = useState([defaultState]);
  
  console.log(todos);
  console.log(action);
  console.log(defaultState);


  const handleTodos = e => {
     // e.persist();
      //setState(state => ({ ...state, [e.target.name]: e.target.value }))
      setTodos(state => ({ ...state, [todos]: action }))
      //console.log(todos);
     // console.log(action);
     // console.log(defaultState);
  
  }

  return [todos, handleTodos];
};

export default useTodos;
