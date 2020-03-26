import { v4 as uuidv4 } from 'uuid';
import { openNotification } from '../../functions/openNotification';

export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      openNotification('bottomLeft', 'TODO added');
      return state.concat({
        title: action.payload,
        key: uuidv4(),
        completed: 'false'
      });
    case 'COMPLETE_TODO':
      openNotification('bottomLeft', 'TODO completed');
      return state.map(todo => {
        if (todo.key === action.payload) {
          return { ...todo, completed: 'true' };
        } else {
          return todo;
        }
      });
    case 'DELETE_TODO':
      openNotification('bottomLeft', 'TODO deleted');
      
      const filteredTodos = state.filter(item => item.key !== action.payload);
      //console.log(action.payload);
      //console.log(filteredTodos);

      console.log("State from delete:")
      console.log(action.payload);
      console.log(filteredTodos);
      return filteredTodos;
      /*return state.splice({
        key: action.payload
      });*/
    default:
      throw new Error();
  }
}
