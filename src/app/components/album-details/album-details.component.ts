import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumesPhoto:any = [];
  user:any = [];

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:ServicesDataService) { }

  ngOnInit() {
    let id:any = this.activatedRoute.snapshot.paramMap.get('id');

    this.service.getAlbumDetails(id).subscribe(resp=>{
      this.albumesPhoto = resp;
     
    });

    this.service.getUserDetails(id).subscribe((data:any)=>{
      this.user = data;
    })
  
  }

  volver(){
    this.router.navigate(['/albums'])
  }

  detalleUsuario(id:number){
    this.router.navigate([ `/userDetails/${id}`])
  }

}
