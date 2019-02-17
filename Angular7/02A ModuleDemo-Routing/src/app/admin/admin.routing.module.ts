import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { RightsComponent } from './rights.component';
import { DashboardComponent } from './dashboard.component';

// const routes: Routes = [
//     {   path: 'user',   component: UserComponent   },
//     {   path: 'rights',   component: RightsComponent   },
//     {   path: 'dashboard',   component: DashboardComponent   },
//   ];

  
const routes: Routes = [
    {   path: 'admin',   component: DashboardComponent,
        children :[
            {   path: 'dashboard',   component: DashboardComponent   },
            {   path: 'user',   component: UserComponent   },
            {   path: 'rights',   component: RightsComponent   },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
