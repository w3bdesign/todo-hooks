import { v4 as uuidv4 } from 'uuid';
import { openNotification } from './openNotification';

export function todoReducer(state, action, dataIndex) {
  const [title, date] = action.payload || '';

  switch (action.type) {
    case 'ADD_TODO':
      openNotification('bottomLeft', 'TODO added');
      // We can modify state directly and treat it as an array because we are using Immer
      state.unshift({
        title: title,
        date: date,
        key: uuidv4(),
        completed: 'false',
        dataIndex: state.length - 1,
      });
      break;
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
      // We can modify state directly and treat it as an array because we are using Immer
      state.splice(dataIndex, 1);
      break;
    default:
      openNotification('bottomLeft', 'An error has occured!');
      throw new Error();
  }
}
