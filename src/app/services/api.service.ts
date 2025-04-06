import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:7189/api/';

  constructor(private http: HttpClient) { }

    // Example: Fetch data
    getAboutData(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}AboutUs`);
    }

    getProjectData(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}Projects`);
    }

    // Submit Contact Form
    postContactForm(formData: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}ContactUs`, formData);
    }

}
