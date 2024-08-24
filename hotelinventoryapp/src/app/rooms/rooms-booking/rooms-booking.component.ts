import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'hinv-rooms-booking',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss',
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  id: number = 0;
  id$!: Observable<string | null>;

  ngOnInit(): void {
    //this.id$ = this.router.params.pipe(map((params) => params['roomid']));
    this.id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')));
  }
}
