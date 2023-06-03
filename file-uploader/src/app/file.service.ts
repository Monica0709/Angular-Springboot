import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = 'http://localhost:8080/api/file'; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) { }
  createEmployee(formData: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,formData);
  }
}
