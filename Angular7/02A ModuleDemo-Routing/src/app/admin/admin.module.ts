import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';

import { UserComponent } from './user.component';
import { RightsComponent } from './rights.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [UserComponent,RightsComponent,DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }