import { Component } from '@angular/core';
import * as actions from '../../state/filter-state/filter.actions';
import { Store } from '@ngrx/store';
import { AppTodoState } from '../../../app-reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent {
  activeFilter: actions.SetValidFilters = 'todos'
  filtersArray: actions.SetValidFilters[] = ['todos','pendientes','completados']
  pendingTasks: number = 0;
  constructor(private store:Store<AppTodoState>){ }

  ngOnInit(){
    this.store.subscribe( state =>{
      this.activeFilter = state.filter;
      this.pendingTasks = state.todos.filter(item => !item.completado).length
    })
  }

  updateFilter(selectedFilter: actions.SetValidFilters){
    this.store.dispatch(actions.updateFilter({filter:selectedFilter}))
  }
}
