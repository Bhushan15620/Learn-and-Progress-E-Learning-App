import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl = 'http://localhost:8080/feedback'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  addFeedback(feedback: any, enrollmentId: string): Observable<Object> {
    const url = `${this.baseUrl}/addFeedback/${enrollmentId}`;
    
    return this.http.post(url, feedback)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateFeedback(enrollmentId: string, rating: number): Observable<Object> {
    const url = `${this.baseUrl}/updateFeedbackRating/${enrollmentId}/${rating}`;
    
    return this.http.put(url, null)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  viewAll(): Observable<Object> {
    return this.http.get(this.baseUrl+'/viewAll')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteFeedback(feedbackId: string): Observable<void> {
    const url = `${this.baseUrl}/deleteFeedback/${feedbackId}`;
    return this.http.delete<void>(url);
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError('An error occurred. Please try again later.');
  }
}