import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducers';
import { Todo } from '../state/models/todo.model';
import { SetValidFilters } from '../state/filter-state/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todosList: Todo[] = [];
  activeFilter:SetValidFilters = 'todos';

  constructor(private store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.subscribe(state =>{
      this.todosList = state.todos;
      this.activeFilter = state.filter;
    })
  }
}
