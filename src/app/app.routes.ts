import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ClientComponent } from './components/client/client.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'master',
    component: MasterComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'client-project',
    component: ClientProjectComponent,
  },
];
