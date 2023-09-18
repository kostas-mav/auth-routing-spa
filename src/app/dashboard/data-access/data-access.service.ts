import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

export interface DogApiResponse {
  message: string[];
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  private api = inject(ApiService);

  getImages(limit: number) {
    return this.api.get<DogApiResponse>(
      `https://dog.ceo/api/breeds/image/random/${limit}`
    );
  }
}
