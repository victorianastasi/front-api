import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  public footerAllUrl = 'https://obelisco-back-production.up.railway.app/api/obelisco/footer/all';
  public dataAll: any;
  public isLoading: boolean = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData(this.footerAllUrl).subscribe(
      data => {
        this.dataAll = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}

