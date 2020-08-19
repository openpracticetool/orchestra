import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { AddSessionComponent } from './add-session/add-session.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BreadcrumbComponent,
    HomeComponent,
    AddSessionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
