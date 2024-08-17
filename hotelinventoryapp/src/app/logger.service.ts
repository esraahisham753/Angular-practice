import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(msg : String) : void {
    console.log(msg);

  }
}
