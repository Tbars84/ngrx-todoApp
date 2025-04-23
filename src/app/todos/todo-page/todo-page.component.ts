import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements  OnInit{
  toggleAllTodos: boolean = false;

  constructor(private store: Store<AppState>){ }

  ngOnInit(): void { }

  toggleAll(){
    this.toggleAllTodos = !this.toggleAllTodos;
    this.store.dispatch(actions.toggleAll({toggleAll: this.toggleAllTodos}))
  }
}
