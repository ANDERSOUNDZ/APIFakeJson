import { Component, OnInit } from '@angular/core';
import { apiDataComment } from 'src/app/model/api-example';
import { JsonApiServiceService } from '../service/json-api-service.service';

@Component({
  selector: 'app-sc-comment',
  templateUrl: './sc-comment.component.html',
  styleUrls: ['./sc-comment.component.css']
})
export class ScCommentComponent implements OnInit {

  apiList : apiDataComment []=[];

  constructor (private startService: JsonApiServiceService){};

  ngOnInit(){
    this.startService.listComment().subscribe(
      (expend: apiDataComment[])=>{
        this.apiList = expend;
      }
    )
  }

}
