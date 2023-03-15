import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { Response } from "../model/response";

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  })
};

@Injectable({
  providedIn: "root"
})
export class ApiStreamingService {
  constructor(
    private _http: HttpClient
  ) {}

  getPaymentByStatusAndUser(idUser: number, idStatus: number): Observable<Response> {
    return this._http.get<Response>(environment.url +
      `Pagos/payment/${idUser}/${idStatus}`, httpOption);
  }

  getUsersService(idUser: number): Observable<Response> {
    return this._http.get<Response>(environment.url +
      `Usuario/userservice/user=${idUser}`, httpOption);
  }

  getStatus(): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Status", httpOption);
  }
}
