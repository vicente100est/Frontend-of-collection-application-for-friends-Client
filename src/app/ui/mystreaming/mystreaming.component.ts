import { Component, OnInit } from '@angular/core';

import { ApiStreamingService } from '../../service/apistreaming.service';

@Component({
  selector: 'app-mystreaming',
  templateUrl: './mystreaming.component.html',
  styleUrls: ['./mystreaming.component.scss']
})
export class MystreamingComponent implements OnInit {

  public lstStreaming: any[] = [];

  constructor(
    private _apistreaming: ApiStreamingService
  ) { }

  ngOnInit(): void {
    this.getStreamings(1);
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
