export function todoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {count: state.count + 1};
      case 'COMPLETE_TODO':
        return {count: state.count - 1};
        case 'DELETE_TODO':
            return {count: state.count - 1};
      default:
        throw new Error();
    }
  }