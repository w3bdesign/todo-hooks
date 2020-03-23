export function todoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        //console.log(state);
        console.log("ADD TODO!");
        console.log(action.payload);
        return {state};
      case 'COMPLETE_TODO':
        return {count: "COMPLETE"};
        case 'DELETE_TODO':
          return {count: "DELETE"};
      default:
        throw new Error();
    }
  }