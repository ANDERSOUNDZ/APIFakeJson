import { Component, OnInit, Input } from '@angular/core';
import { apiDataComment } from 'src/app/model/api-example';

@Component({
  selector: 'app-coment-list-item',
  templateUrl: './coment-list-item.component.html',
  styleUrls: ['./coment-list-item.component.css']
})
export class ComentListItemComponent implements OnInit {

  @Input() returnData = apiDataComment;

  constructor() { }

  ngOnInit() {
  }

}
