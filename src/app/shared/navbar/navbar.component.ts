import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from 'src/app/service/apiauth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public usuario = this._apiauth.usuarioData;

  constructor(
    private _apiauth: ApiauthService,
    private _router: Router
  ) {}

  logout() {
    this._apiauth.logoutUser();
    this._router.navigate(['/home']);
  }
}
