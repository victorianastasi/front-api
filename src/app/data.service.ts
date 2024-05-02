import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    const headers = new HttpHeaders({
      withCredentials: 'http://localhost:3000',
    });

    return this.http.get(url, { headers }).pipe(
      tap((data) => {
        console.log('Data received:', data);
      })
    );
  }
}
