import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss']
})
export class ResolutionComponent implements OnInit {
  public resolutionDownloadUrl = 'https://obelisco-back-production.up.railway.app/api/obelisco/resolution/download';
  public resolutionUrl = 'https://obelisco-back-production.up.railway.app/api/obelisco/resolution';
  constructor() { }

  ngOnInit() {
  }

}
