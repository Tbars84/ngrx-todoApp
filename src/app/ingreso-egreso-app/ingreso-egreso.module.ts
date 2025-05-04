import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IngresosEgresosComponent } from './components/ingresos-egresos/ingresos-egresos.component';
import { EstadisticasComponent } from './components/ingresos-egresos/estadisticas/estadisticas.component';
import { DetalleComponent } from './components/ingresos-egresos/detalle/detalle.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresosEgresosComponent,
    EstadisticasComponent,
    DetalleComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
    MainComponent
  ]
})
export class IngresoEgresoModule { }
