import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiauthService } from "../service/apiauth.service";

@Injectable()

export class JwtInterceptor implements HttpInterceptor{

  constructor(
    private _apiAuth: ApiauthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const usuario = this._apiAuth.usuarioData;

    if (usuario) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${usuario.tokenUsuario}`
        }
      });
    }

    return next.handle(request);
  }

}
