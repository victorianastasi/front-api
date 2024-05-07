import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { NavVerticalItems } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  constructor(private data: DataService, private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  public navList: NavVerticalItems[] = [
    {
      title: 'Footer',
      route: '/docs/footer/all',
      icon: 'bx bx-dock-bottom',
      children: [
        { title: 'Todos', route: '/docs/footer/all' },
        { title: 'Enlaces', route: '/docs/footer/links' },
        { title: 'Teléfonos', route: '/docs/footer/phones' },
        { title: 'Redes Sociales', route: '/docs/footer/networks' },
        { title: 'Imágenes', route: '/docs/footer/images' },
      ],
    },
    {
      title: 'Resolución',
      route: '/docs/resolution',
      icon: 'bx bxs-file-pdf',
      children: [{ title: 'Resolución', route: '/docs/resolution' }],
    },
    {
      title: 'Versiones',
      route: '/docs/versions/all',
      icon: 'bx bx-purchase-tag-alt',
      children: [
        { title: 'Todas', route: '/docs/versions/all' },
        { title: 'Listado', route: '/docs/versions/list' },
        { title: 'Número de versión', route: '/docs/versions/number' },
      ],
    },
    {
      title: 'Header',
      route: '/docs/versions',
      icon: 'bx bx-dock-top',
      children: [{ title: 'Images', route: '/docs/versions/all' }],
    },
    {
      title: 'Areas de gobierno',
      route: '/docs/versions',
      icon: 'bx bxs-vector',
      children: [
        { title: 'Todas', route: '/docs/versions/all' },
        { title: 'Listado', route: '/docs/versions/list' },
        { title: 'Area', route: '/docs/versions/number' },
      ],
    },
  ];
}
