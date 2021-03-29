import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [...state, { id, content, completed: false }];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.slice();
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      const todo = todos[todoIndex];
      const changeTodo = { ...todo, completed: !todo.completed };
      todos.splice(todoIndex, 1, changeTodo);

      return todos;
    }
    default:
      return state;
  }
}
