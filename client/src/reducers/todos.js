import { GET_TODO_LIST, ADD_NEW_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/types';

const initialState = {
  todos: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case GET_TODO_LIST:
      return {...state,
        todos: action.payload
      };
    case DELETE_TODO:
      return {...state,
        todos: state.todos.filter(todo => todo.id != action.payload)
      };
    case TOGGLE_TODO:
      return {...state,
        todos: [...state.todos]
      };
    case ADD_NEW_TODO:
      return {...state,
        todos: [...state.todos, action.payload]
      };           
    default: return state;  
  }
};
