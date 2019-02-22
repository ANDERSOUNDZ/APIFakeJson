import { Component, OnInit , Input } from '@angular/core';
import { apiDataUser } from 'src/app/model/api-example';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() returnData = apiDataUser;

  constructor() { }

  ngOnInit() {
  }

}
