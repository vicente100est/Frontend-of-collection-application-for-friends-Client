import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Response } from '../model/response';
import { Usr } from "../model/usr";

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  })
};

@Injectable({
  providedIn: "root"
})

export class ApiauthService {

  private _usuarioSubject: BehaviorSubject<Usr> = new BehaviorSubject<Usr>({} as Usr);

  public get usuarioData(): Usr {
    return this._usuarioSubject.value;
  }

  constructor(
    private _http: HttpClient
  ) {
    this._usuarioSubject = new BehaviorSubject<Usr>(JSON.parse(localStorage.getItem('usuario') || '{}'));
  }

  loginUser(fechaNacimientoUsuario: string, telefonoUsuario: string): Observable<Response> {
    return this._http.post<Response>(environment.url +
      `Auth/User`, {fechaNacimientoUsuario, telefonoUsuario}, httpOption).pipe(
        map(res => {
          if (res.success === 1) {
            const user: Usr = res.data;
            localStorage.setItem('usuario', JSON.stringify(user));
            this._usuarioSubject.next(user);
          }

          return res;
        })
      );
  }


  logoutUser() {
    localStorage.removeItem('usuario');
    this._usuarioSubject.next({} as Usr);
  }

}
