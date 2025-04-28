Descripción General:
El módulo todos proporciona una funcionalidad completa para gestionar una lista de tareas, permitiendo:​
- Agregar nuevas tareas.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas.
- Filtrar tareas por estado: todas, completadas o pendientes.​

Folders:
components/: Contiene los componentes de la interfaz de usuario para agregar tareas, mostrar la lista, cada ítem individual y el pie de página con filtros.

state/: Incluye la lógica de gestión de estado utilizando NgRx, organizada en acciones, efectos, reducers y selectores.

todo.module.ts: Define el módulo TodosModule, declarando y exportando los componentes, e importando los módulos necesarios.​

Estructura de carpetas:
src/app/todos/
├── components/
│   ├── todo-add/
│   ├── todo-footer/
│   ├── todo-item/
│   └── todo-list/
├── state/
│   ├── actions/
│   ├── effects/
│   ├── reducers/
│   └── selectors/
├── todo.module.ts

Dependencias Principales:
Angular: ^17.1.0
NgRx:
-@ngrx/store: ^17.2.0
-@ngrx/effects: ^17.2.0
-@ngrx/store-devtools: ^17.2.0
RxJS: ~7.8.1
TypeScript: ~5.4.5
