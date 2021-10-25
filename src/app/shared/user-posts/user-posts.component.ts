import { Component, OnInit, Input } from '@angular/core';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input() PostsPadre:any = [];
  @Input() title:any;
  constructor(private service:ServicesDataService) { }

  ngOnInit():void {

 }

}
