import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './types/Post';
// most of the time - used to abstract or decouple functionality to get state/info to your application
@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.BASE_URL + 'posts');
  }
}
