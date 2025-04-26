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
  '[TODO] edita texto',
  props<{id: number , texto: string}>()
);

export const borrarItem = createAction(
  '[TODO] borra item',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Completar todos',
  props<{toggleAll: boolean}>()
);
