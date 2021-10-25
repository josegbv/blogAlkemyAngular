import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any = [];

  constructor(private services:ServicesDataService) { }


  ngOnInit() {
    this.services.getProfile().subscribe((data) => {
      this.profile = data;
      console.log(this.profile)
    });
  }

}
