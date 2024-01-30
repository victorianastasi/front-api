import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public versionsListUrl = 'https://obelisco-back-production.up.railway.app/api/obelisco/versions/list';
  public versionsListUrlDown = 'https://obelisco-back-production.up.railway.app/api/obelisco/versions/list?order=desc';

  public dataList: any;
  public dataListDown: any;
  
  public shorthandList: boolean = false;
  public shorthandListDown: boolean = false;
  public shorthandExampleList: boolean = false;
  
  public isLoading: boolean = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData(this.versionsListUrl).subscribe(
      data => {
        this.dataList = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
    this.data.getData(this.versionsListUrlDown).subscribe(
      data => {
        this.dataListDown = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  toggleList() {
    this.shorthandList = !this.shorthandList;
  }

  toggleListDown() {
    this.shorthandListDown = !this.shorthandListDown;
  }

  toggleExampleList() {
    this.shorthandExampleList = !this.shorthandExampleList;
  }
}
