import { Component, OnInit } from '@angular/core';
import { apiDataPhoto } from 'src/app/model/api-example';
import { JsonApiServiceService } from '../service/json-api-service.service';

@Component({
  selector: 'app-sc-photo',
  templateUrl: './sc-photo.component.html',
  styleUrls: ['./sc-photo.component.css']
})
export class ScPhotoComponent implements OnInit {

  apiList : apiDataPhoto []=[];

  constructor (private startService: JsonApiServiceService){};

  ngOnInit(){
    this.startService.listPhoto().subscribe(
      (expend: apiDataPhoto[])=>{
        this.apiList = expend;
      }
    )
  }
}
