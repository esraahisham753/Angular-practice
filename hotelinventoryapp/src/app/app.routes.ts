import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './rooms/room-add/room-add.component';

export const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/:roomid', component: RoomsBookingComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: '', redirectTo: '/rooms', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];
