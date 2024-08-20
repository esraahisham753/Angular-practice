import { InjectionToken } from "@angular/core";

export const LOCAL_SERVICE = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
})
