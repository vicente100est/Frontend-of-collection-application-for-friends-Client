import { Component, OnInit } from '@angular/core';

import { ApiStreamingService } from '../../service/apistreaming.service';

@Component({
  selector: 'app-mypayment',
  templateUrl: './mypayment.component.html',
  styleUrls: ['./mypayment.component.scss']
})
export class MypaymentComponent implements OnInit {

  public idStatus: number = 2;

  public lstPayments: any[] = [];
  public lstStatus: any[] = [];

  constructor(
    private _apistreaming: ApiStreamingService
  ) {  }

  ngOnInit(): void {
    this.getStatusPayment();
    this.getPayments(1, this.idStatus);
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
