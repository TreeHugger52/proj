import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainUIComponent} from "./core/pages/main-ui/main-ui.component";
import {LoginComponent} from "./core/pages/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: MainUIComponent },
  { path: 'admin', loadChildren: () => import('./core/pages/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
