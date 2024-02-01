import { Component, OnInit } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  public footerImagesUrl = URL_BASE + '/api/obelisco/footer/images';
  public footerImagesUrl1 = URL_BASE + '/api/obelisco/footer/images/1';
  public dataImages: any;
  public isLoading: boolean = true;
  public URL_BASE = URL_BASE;

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
