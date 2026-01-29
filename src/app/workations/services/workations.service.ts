import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkationRow } from '../data/workations.models';

@Injectable()
export class WorkationsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/workflex/workation';

  getRows(): Observable<WorkationRow[]> {
    return this.http.get<WorkationRow[]>(this.apiUrl);
  }
}