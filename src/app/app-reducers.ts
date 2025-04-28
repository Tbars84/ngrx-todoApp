import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/state/models/todo.model";
import { todoReducer } from "./todos/state/todo-state/todo.reducer";
import { SetValidFilters } from "./todos/state/filter-state/filter.actions";
import { filterReducer } from "./todos/state/filter-state/filter.reducer";


export interface AppTodoState {
  todos: Todo[],
  filter: SetValidFilters
}

export const appTODOReducers: ActionReducerMap<AppTodoState> = {
  todos: todoReducer,
  filter: filterReducer
}
