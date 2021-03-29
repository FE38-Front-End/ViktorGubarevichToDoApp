import { VISIBILITY_FILTERS } from "../constants";

export const getTodos = (state) => state.todos;

export const getTodosByVisibilityFilter = (state, visibilityFilter) => {
  const allTodos = getTodos(state);
  console.log(allTodos);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};

//получается мы из метода getTodosByVisibilityFilter возвращаем массив с todoшками, только уже отфильтрованными исходя из нашего фильтра visibilityFilter, который мы передали в компоненте TodoList в mapStateToProps как аргумент visibilityFilter.
