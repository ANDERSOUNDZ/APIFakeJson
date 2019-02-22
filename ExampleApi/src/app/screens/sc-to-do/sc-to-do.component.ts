import { Component, OnInit } from '@angular/core';
import { apiDataToDo } from 'src/app/model/api-example';
import { JsonApiServiceService } from '../service/json-api-service.service';

@Component({
  selector: 'app-sc-to-do',
  templateUrl: './sc-to-do.component.html',
  styleUrls: ['./sc-to-do.component.css']
})
export class ScToDoComponent implements OnInit {

  apiList : apiDataToDo []=[];

  constructor (private startService: JsonApiServiceService){};

  ngOnInit(){
    this.startService.listToDo().subscribe(
      (expend: apiDataToDo[])=>{
        this.apiList = expend;
      }
    )
  }

}
