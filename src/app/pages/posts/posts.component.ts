import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
  posts:[]= [];
  constructor(private services:ServicesDataService, private router:Router) { }

  ngOnInit() {
    this.services.getPosts().subscribe((data:any)=>{
      this.posts = data;
    })
  }

  verMas(id:number){
      this.router.navigate([`/postDetails/${id}`])
  }



}
