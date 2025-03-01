import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] crea todo',
  props<{texto: string}>()
);

export const toggleItem = createAction(
  '[TODO] actualiza toggle',
  props<{id: number}>()
);

export const editarItem = createAction(
  '[TODO] actualiza toggle',
  props<{id: number , texto: string}>()
);

