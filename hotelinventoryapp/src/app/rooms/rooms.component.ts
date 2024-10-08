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
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList, Rooms } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { catchError, Observable, of, Subject, Subscription, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
  hotelname = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  selectedRoom!: RoomList;
  title: String = 'Room List';

  roomList: RoomList[] = [];

  subscription !: Subscription;

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  totalBytes : number = 0;
  rooms$ !: Observable<RoomList[]>;
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();

  roomsCount$ ! : Observable<number>;

  constructor(@SkipSelf() private roomService: RoomsService) {}

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
    this.stream.subscribe((data) => console.log(data));
    /*this.subscription = this.roomService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
    });*/
    this.rooms$ = this.roomService.getRooms$.pipe(
      catchError(err => {
        //console.log(err);
        this.error$.next(err.message);
        return of([]);
      })
    );
    this.roomsCount$ = this.roomService.getRooms$.pipe(
      map(rooms => rooms.length)
    );
    this.getPhotos();
  }

  ngDoCheck(): void {
    console.log('Do Check is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms view';
    this.headerComponents.last.title = 'Last Header';
  }

  ngAfterViewChecked(): void {}

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

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
      checkinTime: new Date('16-Aug-2024'),
      checkoutTime: new Date('17-Aug-2024'),
    };

    this.roomService.addRoom(newRoom).subscribe((data) => {
      this.roomList = data;
    })
  }

  editRoom() {
    const newRoom: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe',
      amenities: 'TV, Air conditioner, Free Wi-Fi, Bathroom, Kitchen',
      rating: 4.5,
      photo:
        'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
      price: 900,
      checkinTime: new Date('16-Aug-2024'),
      checkoutTime: new Date('17-Aug-2024'),
    };

    this.roomService.editRoom(newRoom).subscribe((data) => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    })
  }

  getPhotos() {
    this.roomService.getPhotos().subscribe((event) => {
      switch(event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Request has been a success');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;
          console.log(this.totalBytes);

          break;
        case HttpEventType.Response:
          console.log(event.body);
          break;
        default:
          console.log('Some thing went wront');


      }
    })
  }
}
