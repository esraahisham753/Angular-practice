import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms : RoomList[] | null = [];
  @Input() title : String = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {

  }

  selectRoom(room : RoomList) : void {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnDestroy(): void {
    console.log('OnDestroy is called');

  }
}
