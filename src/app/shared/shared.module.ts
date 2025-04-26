import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from "./pipes/capitalize/capitalize.pipe";

const pipes = [
  CapitalizePipe
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
