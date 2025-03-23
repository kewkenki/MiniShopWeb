import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://localhost:5000/api';

  get(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`, { responseType: 'json' });
  }

  post(url: string, data: any) {
    return this.http.post(`${this.baseUrl}/${url}`, data, { responseType: 'json' });
  }

}
