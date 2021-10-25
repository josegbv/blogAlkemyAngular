import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  albumes:any =[];
  user:any=[];
 


  constructor(private services:ServicesDataService, private router:Router) { 
    
    this.services.getAlbumes().subscribe(resp=>{
      this.albumes = resp;
    });
  }
  
  ngOnInit() {
  


  }

  verMas(id:number){
    this.router.navigate([`/albumDetails/${id}`])
}


  
}
