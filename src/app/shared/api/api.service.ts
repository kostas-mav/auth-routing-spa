import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Gather all the possible http request methods into one service to not repeat
 * yourself (DRY) in multiple other services. Only the GET method is used
 * in this app but some more have been added to show use cases.
 */

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private headers = {
    'Content-Type': 'application/json',
  };

  get<T>(path: string) {
    return this.http.get<T>(`${path}`);
  }

  post<T>(path: string, body: any) {
    return this.http.post<T>(`${path}`, body, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  patch<T>(path: string, body: any) {
    return this.http.patch<T>(`${path}`, body, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  delete<T>(path: string, id: string) {
    return this.http.delete<T>(`${path}/${id}`, {
      withCredentials: true,
    });
  }
}
