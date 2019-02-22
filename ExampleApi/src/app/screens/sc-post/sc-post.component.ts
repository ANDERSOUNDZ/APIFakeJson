import { Component, OnInit } from '@angular/core';
import { apiDataPost } from 'src/app/model/api-example';
import { JsonApiServiceService } from '../service/json-api-service.service';


@Component({
  selector: 'app-sc-post',
  templateUrl: './sc-post.component.html',
  styleUrls: ['./sc-post.component.css']
})
export class ScPostComponent implements OnInit {

  apiList : apiDataPost []=[];

  constructor (private startService: JsonApiServiceService){};

  ngOnInit(){
    this.startService.listPost().subscribe(
      (expend: apiDataPost[])=>{
        this.apiList = expend;
      }
    )
  }

}
