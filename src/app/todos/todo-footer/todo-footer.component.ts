import { Component } from '@angular/core';
import * as actions from '../state/filter-state/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent {
  activeFilter: actions.SetValidFilters = 'todos'
  filtersArray: actions.SetValidFilters[] = ['todos','pendientes','completados']
  constructor(private store:Store<AppState>){ }

  ngOnInit(){
    this.store.select('filter').subscribe(filter => this.activeFilter = filter);
  }

  updateFilter(selectedFilter: actions.SetValidFilters){
    this.store.dispatch(actions.updateFilter({filter:selectedFilter}))
  }
}
