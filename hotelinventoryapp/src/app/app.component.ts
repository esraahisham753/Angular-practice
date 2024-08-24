import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ElementRef,
  Optional,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
import { LOCAL_SERVICE } from './localstorage.token';
import { InitService } from './init.service';
import { AppNavComponent } from "./app-nav/app-nav.component";

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RoomsComponent,
    CommonModule,
    ContainerComponent,
    EmployeeComponent,
    RouterModule,
    AppNavComponent
],
  templateUrl: './app.component.html',
  //template: `
  //<h1>Hello, World from inline template</h1>
  //<p>Awesome angular app</p>
  //`,
  styleUrl: './app.component.scss',
  //styles: [`h1 {color: red}`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'Users';

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(LOCAL_SERVICE) private myLocalStorage: any,
    private initApp : InitService
  ) {}

  /*@ViewChild('user', {read : ViewContainerRef}) vcRef! : ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcRef.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }*/

  //@ViewChild('name', {static: true}) name! : ElementRef;

  ngOnInit(): void {
    this.loggerService?.log('App ngOnInit');
    //this.name.nativeElement.innerText = "Hilton Hotel";
    this.myLocalStorage.setItem('name', 'Hilton Hotel');
    console.log(this.initApp.config);

  }
}
