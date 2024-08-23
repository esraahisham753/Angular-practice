import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/AppConfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];
  getRooms$: Observable<RoomList[]>;
  /*headers = new HttpHeaders({
    token: 'qwm345mdl6md9',
  });*/

  constructor(
    //@Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {
    //console.log(appConfig.apiEndpoint);

    this.getRooms$ = this.http
      .get<RoomList[]>(
        'https://special-xylophone-pjxqvqv45p5h97p6-3000.app.github.dev/api/rooms'
      )
      .pipe(shareReplay(1));
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
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true }
    );

    return this.http.request(request);
  }
}
