import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicesDataService  {

  constructor(private http:HttpClient) {
 
   }

   getUsers(){
    return this.http.get(`${environment.Api}/users`);
  }

  getUserDetails(id:number){
    return this.http.get(`${environment.Api}/users/${id}`)
  }

  getUserPostsDetails(id:number){
    return this.http.get(`${environment.Api}/users/${id}/posts`)
  }

  getPosts(){
    return this.http.get(`${environment.Api}/posts`);
  }

  getPostDetails(id:number){
    return this.http.get(`${environment.Api}/posts/${id}`)
  }
  

  getAlbumes(){
    return this.http.get(`${environment.Api}/albums`)
  }

  getAlbumDetails(id:number){
    return this.http.get(`${environment.Api}/albums/${id}/photos`)
  }

  getUserAlbumesDetails(id:number){
    return this.http.get(`${environment.Api}/users/${id}/albums`)
  }

  getTodos(){
    return this.http.get(`${environment.Api}/todos`).subscribe((data) => {
      console.log(data);
    });
  }

  getUserTodosDetails(id:number){
    return this.http.get(`${environment.Api}/users/${id}/todos`)
  }

  getProfile(){
    return this.http.get(`${environment.Api}/users/1`);
  }



}







