import { Component } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss'],
})
export class PhpComponent {
  code = `
&lt;?php
  // URL del endpoint
  $url = '${URL_BASE}/api/obelisco/footer/phones';

  // Realizar la solicitud GET al endpoint y obtener la respuesta
  $response = file_get_contents($url);

  // Si la solicitud fue exitosa, imprimir la respuesta
  if ($response !== false) {
      echo $response;
  } else {
      // Si la solicitud falló, imprimir un mensaje de error
      echo 'Error al obtener los datos del endpoint';
  }
?&gt;`;
}
