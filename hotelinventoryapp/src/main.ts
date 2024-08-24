import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './app/request.interceptor';
import { APP_INITIALIZER } from '@angular/core';
import { InitService } from './app/init.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

function initFactory(initService : InitService) {
  return () => initService.init();
}


bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
      withInterceptors([requestInterceptor])
    ), {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    },
  provideRouter(routes), provideAnimationsAsync()],
}).catch(err => console.error(err));
