import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducers';
import * as actions from '../todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input()todoFeatures!: Todo;
  @ViewChild('editInput') editInput!: ElementRef;

  editItem: Boolean =  false;
  chkCompletado!:FormControl;
  txtEdition!: FormControl;

  constructor(private store: Store<AppState>){ }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todoFeatures.completado);
    this.txtEdition = new FormControl(this.todoFeatures.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggleItem(
        {id: this.todoFeatures.id}
      ))
    });
  }

  editar(){
    this.editItem = true;
    setTimeout(() => {
      this.editInput.nativeElement.select();
    }, 1);
  }

  enviarEdicion(): void{
    this.editItem = false;
    if (this.txtEdition.invalid || this.txtEdition.value === this.todoFeatures.texto) {return}
    this.store.dispatch(
      actions.editarItem({
        id: this.todoFeatures.id,
        texto: this.txtEdition.value
      })
    )
  }

  borrarItem(){
    this.store.dispatch(actions.borrarItem(
      {id: this.todoFeatures.id}
    ))
  }
}
