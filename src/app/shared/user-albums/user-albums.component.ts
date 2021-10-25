import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent implements OnInit {
@Input() albumPadre:any =[];
@Input() title:any;;
  constructor() { }

  ngOnInit(): void {
  }

}
