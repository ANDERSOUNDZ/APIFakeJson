import { Component, OnInit, Input } from '@angular/core';
import { apiDataAlbum } from 'src/app/model/api-example';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.css']
})
export class AlbumListItemComponent implements OnInit {

  @Input() returnData = apiDataAlbum;

  constructor() { }

  ngOnInit() {
  }

}
