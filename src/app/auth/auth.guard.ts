import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiauthService } from '../service/apiauth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _apiAuth: ApiauthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const usuario = this._apiAuth.usuarioData;

    if (usuario.tokenUsuario != null){
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
