import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor (private route: Router){};

  //navegar con metodo
  navigateToUsers(){
    this.route.navigate(["/app-sc-user"]);
  }
}
