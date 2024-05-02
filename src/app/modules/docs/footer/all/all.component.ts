import { Component, OnInit } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';
import { DataService } from 'src/app/data.service';
import { Observable } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  public footerAllUrl = URL_BASE + '/api/obelisco/footer/all';
  public dataAll: any;
  public isLoading: boolean = true;
  public shorthandAll: boolean = false;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.fetchData().subscribe({
      next: (data) => {
        this.dataAll = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  fetchData(): Observable<any> {
    return this.data.getData(this.footerAllUrl).pipe(
      tap(() => {
        console.log('Data fetched successfully');
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      }),
      finalize(() => {
        console.log('Fetch operation completed');
      })
    );
  }

  toggleVisibility() {
    this.shorthandAll = !this.shorthandAll;
  }
}
