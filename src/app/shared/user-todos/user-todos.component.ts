import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit {
@Input() todosPadre:any;
  constructor() { }

  ngOnInit(): void {
  }

}
