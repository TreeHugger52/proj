import { DbComponent } from './db/db.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'database', component: DbComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
