import { Component, OnInit } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss'],
})
export class ResolutionComponent implements OnInit {
  public resolutionDownloadUrl = URL_BASE + '/api/obelisco/resolution/download';
  public resolutionUrl = URL_BASE + '/api/obelisco/resolution';
  public URL_BASE = URL_BASE;

  constructor() {}

  ngOnInit() {}
}
