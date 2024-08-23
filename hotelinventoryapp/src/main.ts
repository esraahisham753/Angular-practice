import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './app/request.interceptor';


bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
      withInterceptors([requestInterceptor])
    )],
}).catch(err => console.error(err));
