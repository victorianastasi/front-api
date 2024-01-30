import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  public footerImagesUrl =
    'https://obelisco-back-production.up.railway.app/api/obelisco/footer/images';
  public footerImagesUrl1 =
    'https://obelisco-back-production.up.railway.app/api/obelisco/footer/images/1';
  public dataImages: any;
  public isLoading: boolean = true;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData(this.footerImagesUrl).subscribe(
      (data) => {
        this.dataImages = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}
