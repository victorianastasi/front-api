import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  public footerLinksUrl = 'https://obelisco-back-production.up.railway.app/api/obelisco/footer/links';
  public dataLinks: any;
  public isLoading: boolean = true;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData(this.footerLinksUrl).subscribe(
      data => {
        this.dataLinks = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}
