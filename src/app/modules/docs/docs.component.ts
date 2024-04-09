import { Component, OnInit } from '@angular/core';
import {
  NAVIGATION_DOCS,
  URL_BASE,
} from 'src/app/constants/components.constants';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {
  highlighted: boolean = false;

  constructor(private data: DataService, private router: Router) {}

  public processTitle(title: string): string {
    const accentMap: { [key: string]: string } = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
    };

    const titleWithoutAccents = title.replace(
      /[áéíóú]/g,
      (match) => accentMap[match] || match
    );

    return titleWithoutAccents.toLowerCase().replace(/\s/g, '-');
  }
  /* public footerImagesUrl = URL_BASE + '/api/obelisco/footer/images'; */

  /* public dataImages: any; */
  ngOnInit() {
   /*  this.data.getData(this.footerImagesUrl).subscribe(
      (data) => {
        console.log('footerImagesUrl' + data);
        console.log(data);
        this.dataImages = data;
      },
      (error) => {
        console.error(error);
      }
    ); */
  }

  public navigationItems = NAVIGATION_DOCS;

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
