import { Component, OnInit ,Input} from '@angular/core';
import { apiDataPost } from 'src/app/model/api-example';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() returnData = apiDataPost;

  constructor() { }

  ngOnInit() {
  }

}
