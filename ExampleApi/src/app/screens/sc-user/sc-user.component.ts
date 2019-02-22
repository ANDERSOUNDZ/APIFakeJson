import { Component, OnInit } from '@angular/core';
import { apiDataUser } from 'src/app/model/api-example';
import { JsonApiServiceService } from '../service/json-api-service.service';

@Component({
  selector: 'app-sc-user',
  templateUrl: './sc-user.component.html',
  styleUrls: ['./sc-user.component.css']
})
export class ScUserComponent implements OnInit {

  apiList : apiDataUser []=[];

  constructor (private startService: JsonApiServiceService){};


  ngOnInit(){
    this.startService.listUser().subscribe(
      (expend: apiDataUser[])=>{
        this.apiList = expend;
      }
    )
  }

}
