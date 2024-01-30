import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all-versions',
  templateUrl: './all-versions.component.html',
  styleUrls: ['./all-versions.component.scss'],
})
export class AllVersionsComponent implements OnInit {
  public versionsAllUrl =
    'https://obelisco-back-production.up.railway.app/api/obelisco/versions/all';
  public dataAll: any;
  public shorthandList: boolean = false;
  public shorthandExampleAll: boolean = false;
  public isLoading: boolean = true;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData(this.versionsAllUrl).subscribe(
      (data) => {
        this.dataAll = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  toggleList() {
    this.shorthandList = !this.shorthandList;
  }

  toggleExampleAll() {
    this.shorthandExampleAll = !this.shorthandExampleAll;
  }
}
