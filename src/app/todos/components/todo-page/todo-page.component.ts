import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppTodoState } from '../../../app-reducers';
import * as actions from '../../state/todo-state/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements  OnInit{
  toggleAllTodos: boolean = false;

  constructor(private store: Store<AppTodoState>){ }

  ngOnInit(): void { }

  toggleAll(){
    this.toggleAllTodos = !this.toggleAllTodos;
    this.store.dispatch(actions.toggleAll({toggleAll: this.toggleAllTodos}))
  }
}
