import { Component, OnInit } from '@angular/core';

import { ApiStreamingService } from '../../service/apistreaming.service';
import { ApiauthService } from 'src/app/service/apiauth.service';

@Component({
  selector: 'app-mystreaming',
  templateUrl: './mystreaming.component.html',
  styleUrls: ['./mystreaming.component.scss']
})
export class MystreamingComponent implements OnInit {

  public usuario = this._apiauth.usuarioData;

  public lstStreaming: any[] = [];

  constructor(
    private _apistreaming: ApiStreamingService,
    private _apiauth: ApiauthService
  ) { }

  ngOnInit(): void {
    this.getStreamings(this.usuario.idUsuario);
  }

  getStreamings(user: number) {
    this._apistreaming.getUsersService(user).subscribe(response => {
      if (response.success === 1) {
        this.lstStreaming = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }
}
