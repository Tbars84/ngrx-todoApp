import { Routes } from "@angular/router";
import { EstadisticasComponent } from "../../components/ingresos-egresos/estadisticas/estadisticas.component";
import { IngresosEgresosComponent } from "../../components/ingresos-egresos/ingresos-egresos.component";
import { DetalleComponent } from "../../components/ingresos-egresos/detalle/detalle.component";

export const DashRoutes: Routes = [
  {path:'', component: EstadisticasComponent},
  {path:'ingreso-egreso', component: IngresosEgresosComponent},
  {path:'detalle', component: DetalleComponent},
]
