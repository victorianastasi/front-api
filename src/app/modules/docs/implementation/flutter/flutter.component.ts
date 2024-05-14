import { Component } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-flutter',
  templateUrl: './flutter.component.html',
  styleUrls: ['./flutter.component.scss'],
})
export class FlutterComponent {
  code = `
import 'dart:convert';
import 'package:http/http.dart' as http;

class DataService {
  Future fetchData() async {
    final response = await http.get(Uri.parse('${URL_BASE}/api/obelisco/footer/phones'));
    if (response.statusCode == 200) {
      // Si la solicitud fue exitosa, analiza el JSON y devuelve los datos
      return jsonDecode(response.body);
    } else {
      // Si la solicitud falló, lanza una excepción
      throw Exception('Failed to load data');
    }
  }
}`;
}
