import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todosList: Todo[] = [];

  constructor(private store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todosList = todos);
  }
}
