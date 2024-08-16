import { Component, ViewChild, ViewContainerRef, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  //template: `
  //<h1>Hello, World from inline template</h1>
  //<p>Awesome angular app</p>
  //`,
  styleUrl: './app.component.scss'
  //styles: [`h1 {color: red}`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'Users';

  /*@ViewChild('user', {read : ViewContainerRef}) vcRef! : ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcRef.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }*/

  @ViewChild('name', {static: true}) name! : ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }
}
