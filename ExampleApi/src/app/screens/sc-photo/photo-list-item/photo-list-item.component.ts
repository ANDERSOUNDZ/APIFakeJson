import { Component, OnInit, Input } from '@angular/core';
import { apiDataPhoto } from 'src/app/model/api-example';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.css']
})
export class PhotoListItemComponent implements OnInit {

  @Input() returnData = apiDataPhoto;

  constructor() { }

  ngOnInit() {
  }

}
