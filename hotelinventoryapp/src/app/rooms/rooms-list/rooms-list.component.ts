import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {
  @Input() rooms : RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {

  }

  selectRoom(room : RoomList) : void {
    this.selectedRoom.emit(room);
  }
}
