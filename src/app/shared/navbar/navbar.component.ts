import { Component, OnInit } from '@angular/core';
import { ApiauthService } from 'src/app/service/apiauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public usuario = this._apiauth.usuarioData;

  constructor(
    private _apiauth: ApiauthService
  ) {}

}
