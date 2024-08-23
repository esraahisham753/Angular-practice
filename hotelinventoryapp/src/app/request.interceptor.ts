import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  //console.log('Request interceptor', req);
  if(req.method == 'POST') {
    const newRequest = req.clone({
      headers: new HttpHeaders({
        'token': 'fhd8s7dsg43b'
      })
    });

    return next(newRequest);
  }
  return next(req);
};
