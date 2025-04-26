import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialFilter : actions.SetValidFilters = 'todos';

const _filterReducer = createReducer(initialFilter,
  on(actions.filterByCompleted, (state , {filter}) => filter as any),
)

export function filterReducer(state, action) {
  return _filterReducer(state, action)
}
