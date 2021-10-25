import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:any = [];

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:ServicesDataService) { }

  ngOnInit() {
    let id:any = this.activatedRoute.snapshot.paramMap.get('id');

    this.service.getPostDetails(id).subscribe(resp=>{
      this.post = resp;
    })
  
  }

  volver(){
    this.router.navigate(['/posts'])
  }
}
