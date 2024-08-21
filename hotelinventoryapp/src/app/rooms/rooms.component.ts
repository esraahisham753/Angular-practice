import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  ViewChildren,
  QueryList,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList, Rooms } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelname = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  selectedRoom!: RoomList;
  title: String = 'Room List';

  roomList: RoomList[] = [];

  constructor(@SkipSelf() private roomService : RoomsService) {}

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    })
  }

  ngDoCheck(): void {
    console.log('Do Check is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms view';
    this.headerComponents.last.title = 'Last Header';
  }

  ngAfterViewChecked(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms';
  }

  selectRoom(room: RoomList): void {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom(): void {
    const newRoom: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe',
      amenities: 'TV, Air conditioner, Free Wi-Fi, Bathroom, Kitchen',
      rating: 4.5,
      photo:
        'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
      price: 900,
      checkIn: new Date('16-Aug-2024'),
      checkOut: new Date('17-Aug-2024'),
    };

    this.roomList = [...this.roomList, newRoom];
  }
}
