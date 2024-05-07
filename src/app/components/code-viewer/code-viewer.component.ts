import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap, catchError, finalize } from 'rxjs';
import { URL_BASE } from 'src/app/constants/components.constants';
import { DataService } from 'src/app/data.service';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule, ClipboardModule],
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss'],
})
export class CodeViewerComponent implements OnInit {
  @Input() url!: string;
  @Input() forImage: boolean = false;
  @Input() forLink: boolean = false;

  public URL_BASE = URL_BASE;
  public allUrl: string = '';
  public isLoading: boolean = true;
  public shorthandAll: boolean = false;

  public dataAll: any;

  constructor(private data: DataService) {
    this.allUrl = URL_BASE + this.url;
  }

  ngOnInit() {
    this.allUrl = URL_BASE + this.url;

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
    return this.data.getData(this.allUrl).pipe(
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
