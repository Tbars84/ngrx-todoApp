import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from "./pipes/capitalize/capitalize.pipe";
import { FilterByTagPipe } from './pipes/filter-todo-by-tag/filter-by-tag.pipe';

const pipes = [
  CapitalizePipe,
  FilterByTagPipe
]

@NgModule({
  declarations: [
    ...pipes
  ],
  exports: [
    ...pipes,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule { }
