import { Component, OnInit } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  public footerAllUrl = URL_BASE + '/api/obelisco/footer/all';
  public dataAll: any;
  public isLoading: boolean = true;
  public shorthandAll: boolean = false;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData(this.footerAllUrl).subscribe(
      (data) => {
        this.dataAll = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
    console.log(this.dataAll);
  }
  toggleVisibility() {
    this.shorthandAll = !this.shorthandAll;
  }
}
