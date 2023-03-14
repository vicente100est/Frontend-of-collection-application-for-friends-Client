import { Component, OnInit } from '@angular/core';

import { ApiStreamingService } from '../../service/apistreaming.service';
import { ApiauthService } from '../../service/apiauth.service';
import { Observable } from 'rxjs';
import { Usr } from 'src/app/model/usr';

@Component({
  selector: 'app-mypayment',
  templateUrl: './mypayment.component.html',
  styleUrls: ['./mypayment.component.scss']
})
export class MypaymentComponent implements OnInit {

  public usuario = this._apiauth.usuarioData;

  public idStatus: number = 2;

  public lstPayments: any[] = [];
  public lstStatus: any[] = [];

  constructor(
    private _apistreaming: ApiStreamingService,
    private _apiauth: ApiauthService
  ) {  }

  ngOnInit(): void {
    this.getStatusPayment();
    this.getPayments(this.usuario.idUsuario, this.idStatus);
  }

  getPayments(user: number, status: number) {
    this._apistreaming.getPaymentByStatusAndUser(user, status).subscribe(response => {
      if (response.success === 1) {
        this.lstPayments = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  getStatusPayment() {
    this._apistreaming.getStatus().subscribe(response => {
      if (response.success === 1) {
        this.lstStatus = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

}
