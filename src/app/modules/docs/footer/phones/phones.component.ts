import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  public footerPhonesUrl = 'https://obelisco-back-production.up.railway.app/api/obelisco/footer/phones';
  public dataPhones: any;
  public isLoading: boolean = true;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData(this.footerPhonesUrl).subscribe(
      data => {
        this.dataPhones = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}
