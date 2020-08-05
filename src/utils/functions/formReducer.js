import { v4 as uuidv4 } from 'uuid';
import { openNotification } from './openNotification';

export function todoReducer(state, action) {
  const [title, date] = action.payload || '';

  switch (action.type) {
    case 'ADD_TODO':
      openNotification('bottomLeft', 'TODO added');
      state.push({ title, date, key: uuidv4(), completed: 'false' });
      break;
    case 'COMPLETE_TODO':
      openNotification('bottomLeft', 'TODO completed');
      const todoToComplete = state.filter(
        (todo) => todo.key === action.payload
      )[0];
      if (todoToComplete) {
        todoToComplete.completed = 'true';
      }
      break;
    case 'DELETE_TODO':
      openNotification('bottomLeft', 'TODO deleted');
      return state.filter((item) => item.key !== action.payload);
    default:
      openNotification('bottomLeft', 'An error has occured!');
      throw new Error();
  }
}
