import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { SetValidFilters } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";


export interface AppState {
  todos: Todo[],
  filter: SetValidFilters
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
