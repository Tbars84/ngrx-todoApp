import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../../todos/state/models/todo.model';
import { SetValidFilters } from '../../../todos/state/filter-state/filter.actions';

@Pipe({
  name: 'filterByTag'
})
export class FilterByTagPipe implements PipeTransform {

  transform(todos: Todo[], filter: SetValidFilters): Todo[] {
    switch (filter) {
      case 'completados':
        return todos.filter(el => el.completado)
        break;
      case 'pendientes':
        return todos.filter(el => !el.completado)
        break;
      default:
        return todos
        break;
    }
  }

}
