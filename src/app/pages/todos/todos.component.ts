import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private services:ServicesDataService) { }

  ngOnInit(): void {
  }

}
