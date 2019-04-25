import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ResponseData } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  uuid: string
  token: string

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'uuid': this.uuid,
        'token': this.token
      }});
    
      return next.handle(authReq)
      .pipe(
        switchMap(event => {
          if (event instanceof HttpResponse) {
            const res = formatResponse(event);
            return res.status >= 200 && res.status < 300 ? of(res) : throwError(res.body);
          }
          return of(event);
        })
      )
    
  }

}

function formatResponse(response: HttpResponse<any>) {
  const {status, body}: {status: number; body:ResponseData} = response;
  if (status >= 200 && status < 300) {
    const { Error, ...other } = body;
    let newStatus: number, newBody: any;
    if (Error) {
      if (Error.errCode === 200) {
        const keys = Object.keys(body).filter(k => k === 'data');
        newStatus = status;
        newBody = keys.length === 0 ? {} : other;
      } else {
        newStatus = 400;
        newBody = Error;
      }
    }
    const res = response.clone({status: newStatus, body: newBody});
    return res;
  }
  return response;
}