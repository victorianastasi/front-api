import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss'],
})
export class NetworksComponent implements OnInit {
  public footerNetworksUrl =
    'https://obelisco-back-production.up.railway.app/api/obelisco/footer/networks';
  public dataNetworks: any;
  public isLoading: boolean = true;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData(this.footerNetworksUrl).subscribe(
      (data) => {
        this.dataNetworks = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}
