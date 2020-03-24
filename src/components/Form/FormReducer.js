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
      console.log("Complete called in reducer:");
      console.log(state);
      console.log(action.id);

      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...state, completed: 'true' };
        } else {
          return todo;
        }
      });
    case 'DELETE_TODO':
      return { count: 'DELETE' };
    default:
      throw new Error();
  }
}
