import { createStore } from "reducer-mini";
import TodoReducer from "../reducers/todoReducer";
import TodoActions from "../reducers/actions/todoActions";

import TodoState from "./states/todoState";

const [TodoProvider, useTodoDispatch, useTodoStore] = createStore(
  TodoReducer,
  TodoState,
  TodoActions
);

export { TodoProvider, useTodoDispatch, useTodoStore };
