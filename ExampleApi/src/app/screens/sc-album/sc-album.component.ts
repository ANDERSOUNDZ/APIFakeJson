import { Component, OnInit } from '@angular/core';
import { apiDataAlbum } from 'src/app/model/api-example';
import { JsonApiServiceService } from '../service/json-api-service.service';

@Component({
  selector: 'app-sc-album',
  templateUrl: './sc-album.component.html',
  styleUrls: ['./sc-album.component.css']
})
export class ScAlbumComponent implements OnInit {

  apiList : apiDataAlbum []=[];

  constructor (private startService: JsonApiServiceService){};

  ngOnInit(){
    this.startService.listAlbum().subscribe(
      (expend: apiDataAlbum[])=>{
        this.apiList = expend;
      }
    )
  }
}
