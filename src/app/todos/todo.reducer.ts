import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial :Todo[] = [];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state , {texto}) => [...state, new Todo(texto)]),

  on(actions.toggleItem, (state , {id}) => {
    return state.map(el => {
      if (el.id === id) {
        return {
          ...el,
          completado: !el.completado
        }
      } else {
        return el
      }
    })
  }),

  on(actions.editarItem, (state , {id , texto}) => {

    return state.map(el => {
      if (el.id === id) {
        return { ...el, texto }
      }
        return el
    })
  }),

  on(actions.borrarItem , (state, {id})=> state.filter(el => el.id !== id))

);

export function todoReducer(state:Todo[] | undefined , action: Action): Todo[] {
  return _todoReducer(state, action)
}
