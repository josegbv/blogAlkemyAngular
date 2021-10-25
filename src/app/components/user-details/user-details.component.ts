
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any = [];
  id:any;
  userPost:any = [];
  userAlbumes:any = [];
  userTodos:any = [];
  titlePosts = 'Posts';
  titleAlbums = 'Albums';

  constructor(private service:ServicesDataService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');

    this.service.getUserDetails(this.id).subscribe((resp:any)=>{
      this.user = resp;
    })
    console.log(this.user)
  }

  verPosts(id:number){
    this.service.getUserPostsDetails(id).subscribe((data:any)=>{
      this.userPost = data;
    })
  }

  verAlbumes(id:number){
    this.service.getUserAlbumesDetails(this.id).subscribe((data:any)=>{
      this.userAlbumes = data;
      console.log(this.userAlbumes)
    })
  }

  verTodos(id:number){
    this.service.getUserTodosDetails(this.id).subscribe((data:any)=>{
      this.userTodos = data;
      console.log(data, 'estos son todos  del usuario')
    })
  }

}
