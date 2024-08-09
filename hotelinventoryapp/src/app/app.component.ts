import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',
  //template: `
  //<h1>Hello, World from inline template</h1>
  //<p>Awesome angular app</p>
  //`,
  styleUrl: './app.component.scss'
  //styles: [`h1 {color: red}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
