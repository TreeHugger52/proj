import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

import { DbComponent } from './db/db.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatModule } from '../../shared/mat.module';

@NgModule({
  declarations: [DbComponent, UsersComponent, AdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    AdminRoutingModule,
    MatModule,
  ],
  exports: [DbComponent, UsersComponent, AdminComponent],
})
export class AdminModule {}
