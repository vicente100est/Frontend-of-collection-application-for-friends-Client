import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from 'src/app/service/apiauth.service';
import { Usr } from 'src/app/model/usr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public usuarioLog: Usr = {} as Usr;

  constructor(
    private _apiauth: ApiauthService,
    private _router: Router
  ) {
    this._apiauth.usuario.subscribe(res => {
      this.usuarioLog = res;
    });
  }

  logout() {
    this._apiauth.logoutUser();
    this._router.navigate(['/home']);
  }
}
