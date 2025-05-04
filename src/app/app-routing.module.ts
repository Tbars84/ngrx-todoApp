import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ingreso-egreso-app/components/auth/login/login.component';
import { RegisterComponent } from './ingreso-egreso-app/components/auth/register/register.component';
import { DashboardComponent } from './ingreso-egreso-app/components/dashboard/dashboard.component';
import { DashRoutes } from './ingreso-egreso-app/shared/child-routes/dashboard-child-routes';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path:'',
    component:DashboardComponent,
    children: DashRoutes
   },
  {path:'**', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
