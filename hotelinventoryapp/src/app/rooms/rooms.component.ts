import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelname = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList : RoomList[] = [{
    roomNumber: 1,
    roomType: "Deluxe Room",
    amenities: "Air conditioner, Wi-Fi, bathroom, kitchen",
    price: 500,
    photo: 'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
    checkIn: new Date('12-Aug-2024'),
    checkOut: new Date('13-Aug-2024')
  },
  {
    roomNumber: 2,
    roomType: "Deluxe Room",
    amenities: "Air conditioner, Wi-Fi, bathroom, kitchen",
    price: 1000,
    photo: 'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
    checkIn: new Date('14-Aug-2024'),
    checkOut: new Date('15-Aug-2024')
  },
  {
    roomNumber: 3,
    roomType: "Private suite",
    amenities: "Air conditioner, Wi-Fi, bathroom, kitchen",
    price: 1500,
    photo: 'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
    checkIn: new Date('16-Aug-2024'),
    checkOut: new Date('17-Aug-2024')
  }
];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
