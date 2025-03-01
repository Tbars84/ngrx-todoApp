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
    console.log('Antes:', state);
    console.log('Después:', state.map(el => {
      if (el.id === id) {
        return { ...el, texto };
      }
      return el;
    }));

    return state.map(el => {
      if (el.id === id) {
        return { ...el, texto }
      }
        return el
    })
  })

);

export function todoReducer(state:Todo[] | undefined , action: Action): Todo[] {
  return _todoReducer(state, action)
}
