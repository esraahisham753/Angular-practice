import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/AppConfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Wi-Fi, bathroom, kitchen',
      price: 500,
      photo:
        'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
      checkIn: new Date('12-Aug-2024'),
      checkOut: new Date('13-Aug-2024'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Wi-Fi, bathroom, kitchen',
      price: 1000,
      photo:
        'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
      checkIn: new Date('14-Aug-2024'),
      checkOut: new Date('15-Aug-2024'),
      rating: 3.46546,
    },
    {
      roomNumber: 3,
      roomType: 'Private suite',
      amenities: 'Air conditioner, Wi-Fi, bathroom, kitchen',
      price: 1500,
      photo:
        'https://unsplash.com/photos/vacant-white-bed-near-the-window-B4rEJ09-Puo',
      checkIn: new Date('16-Aug-2024'),
      checkOut: new Date('17-Aug-2024'),
      rating: 2.6,
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig : AppConfig) {
    console.log(appConfig.apiEndpoint);

    console.log('Rooms Service is called!');



  }

  getRooms() : RoomList[]{
    return this.roomList;
  }
}
