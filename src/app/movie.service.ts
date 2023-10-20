import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'fa1c9c03';
  private apiUrl = 'https://www.omdbapi.com';

  constructor(private http:HttpClient) { }

  getSearchedMovie(movieName: string) {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&t=${movieName}`);
  }
}
