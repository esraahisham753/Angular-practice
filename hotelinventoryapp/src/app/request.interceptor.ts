import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request interceptor', req);
  const newRequest = new req.clone({headers: })
  return next(req);
};
