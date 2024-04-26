import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { NavVerticalItems } from '@gcba/ngx-obelisco/core/models';

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
      icon: 'bx bxs-user-circle',
      children: [
        { title: 'Todos', route: '/docs/footer/all' },
        { title: 'Imágenes', route: '/docs/footer/images' },
        { title: 'Enlaces', route: '/docs/footer/links' },
        { title: 'Teléfonos', route: '/docs/footer/phones' },
        { title: 'Redes Sociales', route: '/docs/footer/networks' },
      ],
    },
    {
      title: 'Resolución',
      route: '/docs/resolution',
      icon: 'bx bxs-user-circle',
      children: [{ title: 'Resolución', route: '/docs/resolution' }],
    },
    {
      title: 'Versiones',
      route: '/docs/versions',
      icon: 'bx bxs-user-circle',
      children: [
        { title: 'Todas', route: '/docs/versions/all' },
        { title: 'Listado', route: '/docs/versions/list' },
        { title: 'Número de versión', route: '/docs/versions/number' },
      ],
    },
  ];
}
