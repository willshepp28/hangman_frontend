import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";






// Services
import { AuthService } from "../../authentication/auth.service";



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private _auth: AuthService
  ){}

intercept(
  request: HttpRequest<any>,
  next: HttpHandler
) {


  const authService = this.injector.get(AuthService);
    const tokenizedReq = request.clone(
      {
        headers: request.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    );
    return next.handle(tokenizedReq);




}

}
