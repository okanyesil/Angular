import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContentModel} from './content.model';
import {CategoryModel} from './category.model';

@Injectable()
export class RestService {
  baseUrl = 'http://localhost:3500/';
  constructor(private http: HttpClient) {
  }
  getContent(): Observable<ContentModel[]> {
    return this.http.get<ContentModel[]>(this.baseUrl + 'blogYazilari');
  }
  getCategory(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.baseUrl + 'categories');
  }

}
