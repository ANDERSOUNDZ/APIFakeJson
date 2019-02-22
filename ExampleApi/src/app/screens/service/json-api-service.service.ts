import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { apiDataPost, apiDataUser, apiDataComment, apiDataAlbum, apiDataPhoto, apiDataToDo } from 'src/app/model/api-example';


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

  listComment():Observable<apiDataComment[]>{
    return this.http.get<apiDataComment[]>(this.baseUrl+"/comments")
  }

  listAlbum():Observable<apiDataAlbum[]>{
    return this.http.get<apiDataAlbum[]>(this.baseUrl+"/albums")
  }

  listPhoto():Observable<apiDataPhoto[]>{
    return this.http.get<apiDataPhoto[]>(this.baseUrl+"/photos")
  }

  listToDo():Observable<apiDataToDo[]>{
    return this.http.get<apiDataToDo[]>(this.baseUrl+"/todos")
  }

}
