import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './pages/table/table.component';

export const AppRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'table', component: TableComponent },
    ]
  },
];
