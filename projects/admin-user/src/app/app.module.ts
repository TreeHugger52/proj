import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainUIComponent } from './core/pages/main-ui/main-ui.component';
import { LoginComponent } from './core/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminModule } from './core/pages/admin/admin.module';
import { MatModule } from './core/shared/mat.module';

@NgModule({
  declarations: [AppComponent, MainUIComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    AdminModule,
    AppRoutingModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
