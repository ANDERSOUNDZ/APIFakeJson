import { Component, OnInit, Input } from '@angular/core';
import { apiDataToDo } from 'src/app/model/api-example';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent implements OnInit {

  @Input() returnData = apiDataToDo;

  constructor() { }

  ngOnInit() {
  }

}
