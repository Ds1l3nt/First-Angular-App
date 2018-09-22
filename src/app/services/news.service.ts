import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, PUBLIC_URL } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news:any;

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
     console.error(error);
     return of(result as T);
    };
  }

  getAll(){
    let url = API_URL+"/news";
    return this.http.get(url, httpOptions)
    .pipe(
      tap(news => console.log('fetch news')),
      catchError(this.handleError('getNews', []))
    );
  }

  getOne(id){
    let url = API_URL+"/news/"+id;
    return this.http.get(url, httpOptions);
  }

  getURL(img_name){
    return PUBLIC_URL+"uploads/"+img_name;
  }

}
