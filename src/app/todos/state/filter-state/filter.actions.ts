import { createAction, props } from '@ngrx/store';

export type SetValidFilters = 'todos' | 'completados' | 'pendientes';

export const updateFilter = createAction(
  '[FILTER] set filter',
  props<{filter: SetValidFilters}>()
);
