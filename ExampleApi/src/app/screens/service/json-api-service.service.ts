import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { apiDataPost, apiDataUser } from 'src/app/model/api-example';


@Injectable({
  providedIn: 'root'
})
export class JsonApiServiceService {

  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }

  listPost():Observable<apiDataPost[]>{
    return this.http.get<apiDataPost[]>(this.baseUrl+"/posts")
  }

  listUser():Observable<apiDataUser[]>{
    return this.http.get<apiDataUser[]>(this.baseUrl+"/users")
  }

}
