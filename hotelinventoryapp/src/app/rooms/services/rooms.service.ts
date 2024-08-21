import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/AppConfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];

  constructor(
    //@Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {
    //console.log(appConfig.apiEndpoint);

    console.log('Rooms Service is called!');
  }

  getRooms() {
    return this.http.get<RoomList[]>(
      'https://special-xylophone-pjxqvqv45p5h97p6-3000.app.github.dev/api/rooms'
    );
  }

  addRoom(room: RoomList) {
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = {headers};*/
    return this.http.post<RoomList[]>(
      'https://special-xylophone-pjxqvqv45p5h97p6-3000.app.github.dev/api/rooms',
      room
    );
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(
      `https://special-xylophone-pjxqvqv45p5h97p6-3000.app.github.dev/api/rooms/${room.roomNumber}`,
      room
    );
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(
      `https://special-xylophone-pjxqvqv45p5h97p6-3000.app.github.dev/api/rooms/${id}`
    );
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {reportProgress: true});

    return this.http.request(request);
  }
}
