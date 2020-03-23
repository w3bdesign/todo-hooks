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
      return { count: 'COMPLETE' };
    case 'DELETE_TODO':
      return { count: 'DELETE' };
    default:
      throw new Error();
  }
}
