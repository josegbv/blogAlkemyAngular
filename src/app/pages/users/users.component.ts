import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesDataService } from 'src/app/services/services-data.service';
import { createAvatar } from '@dicebear/avatars';
/* import * as style from '@dicebear/avatars-identicon-sprites'; */

@Component({
  selector: 'app-usuarios',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:[] =[];
 
  constructor(private services:ServicesDataService, private router:Router) { }



  ngOnInit() {

    this.services.getUsers().subscribe((data:any)=>{
      this.users = data;
    })
  }

  verMas(id:number){
    this.router.navigate([`/userDetails/${id}`])
  }

}
