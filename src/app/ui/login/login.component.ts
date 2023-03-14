import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "src/app/service/apiauth.service";

@Component({ templateUrl: './login.component.html' })

export class LoginComponent implements OnInit {

  public dateofbird: string = '';
  public telephone: string = '';

  constructor(
    public apiAuth: ApiauthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.apiAuth.loginUser(this.dateofbird, this.telephone).subscribe(response => {
      if (response.success === 1) {
        this._router.navigate(['/mypayments']);
      }
    });
  }
}
