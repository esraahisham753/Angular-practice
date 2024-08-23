import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: '', redirectTo: '/rooms', pathMatch: 'full'}
  //{path: 'employee', component: EmployeeComponent},
];
