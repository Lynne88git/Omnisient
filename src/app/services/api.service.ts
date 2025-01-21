import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Fetch user data for welcome banner
  getUserData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  // Fetch category statistics
  getCategoryStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  // Fetch all datasets
  getAllDatasets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/datasets`);
  }
  // Filter by pending review
  getPendingReviewDatasets(): Observable<any[]> {
    return this.getAllDatasets().pipe(
      map((datasets) => datasets.filter((dataset) => dataset.pendingReview))
    );
  }
  // Filter by recently available
  getRecentlyAvailableDatasets(): Observable<any[]> {
    return this.getAllDatasets().pipe(
      map((datasets) => datasets.filter((dataset) => dataset.recentlyAvailable))
    );
  }
}
