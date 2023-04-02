import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ListingAPIRequest } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(apiReqDtls: ListingAPIRequest) {
    return this.http.get(
      `${environment.api_url}top-headlines?country=in&apiKey=${environment.newsAPIKey}&page=${apiReqDtls.page}&pageSize=${apiReqDtls.limit}`
    );
  }
}
