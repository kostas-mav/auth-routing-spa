import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private headers = {
    'Content-Type': 'application/json',
  };

  get<T>(path: string) {
    return this.http.get<T>(`http://localhost:3000/${path}`, {
      withCredentials: true,
    });
  }

  post<T>(path: string, body: any) {
    return this.http.post<T>(`http://localhost:3000/${path}`, body, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  patch<T>(path: string, body: any) {
    return this.http.patch<T>(`http://localhost:3000/${path}`, body, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  delete<T>(path: string, id: string) {
    return this.http.delete<T>(`http://localhost:3000/${path}/${id}`, {
      withCredentials: true,
    });
  }
}