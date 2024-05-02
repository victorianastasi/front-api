import { Component } from '@angular/core';
import { NavbarRoute, SearchbarItem } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-api';

  routes: NavbarRoute[] = [
    {
      title: 'Documentación',
      route: '/docs',
    },
    {
      title: 'Sobre Obelisco',
      route: '/about',
    },
  ];

  searchbarItems: SearchbarItem[] = [
    {
      title: 'Documentación',
      route: '/docs',
    },
    {
      title: 'Sobre Obelisco',
      route: '/about',
    },
  ];
}
