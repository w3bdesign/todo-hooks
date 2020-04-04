import { v4 as uuidv4 } from 'uuid';
import { openNotification } from './openNotification';

export function todoReducer(state, action) {
  const [title, date] = action.payload;
  
  switch (action.type) {
    case 'ADD_TODO':
      openNotification('bottomLeft', 'TODO added');
      return state.concat({
        title: title,
        date: date,
        key: uuidv4(),
        completed: 'false',
      });
    case 'COMPLETE_TODO':
      openNotification('bottomLeft', 'TODO completed');
      return state.map((todo) => {
        if (todo.key === action.payload) {
          return {
            ...todo,
            completed: 'true',
          };
        } else {
          return todo;
        }
      });
    case 'DELETE_TODO':
      openNotification('bottomLeft', 'TODO deleted');
      return state.filter((item) => item.key !== action.payload);
    default:
      openNotification('bottomLeft', 'An error has occured!');
      throw new Error();
  }
}
