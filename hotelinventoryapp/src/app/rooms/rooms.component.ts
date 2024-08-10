import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelname = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms : Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  toggle() {
    this.hideRooms = ! this.hideRooms;
  }
}
