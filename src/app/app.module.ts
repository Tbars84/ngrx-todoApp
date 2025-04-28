import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appTODOReducers } from './app-reducers';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { LoginComponent } from './ingreso-egreso-app/components/auth/login/login.component';
import { RegisterComponent } from './ingreso-egreso-app/components/auth/register/register.component';
import { DashboardComponent } from './ingreso-egreso-app/components/dashboard/dashboard.component';
import { IngresosEgresosComponent } from './ingreso-egreso-app/components/ingresos-egresos/ingresos-egresos.component';
import { EstadisticasComponent } from './ingreso-egreso-app/components/ingresos-egresos/estadisticas/estadisticas.component';
import { DetalleComponent } from './ingreso-egreso-app/components/ingresos-egresos/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresosEgresosComponent,
    EstadisticasComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(appTODOReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
