import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BASE } from './constants/components.constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = URL_BASE + '/api/obelisco/footer/images';

  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    return this.http.get(url, { withCredentials: true });
  }
}
