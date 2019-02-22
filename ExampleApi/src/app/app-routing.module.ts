import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScPostComponent } from './screens/sc-post/sc-post.component';
import { ScUserComponent } from './screens/sc-user/sc-user.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'app-sc-user',
    pathMatch: 'full'
  },
  {
    path: 'app-sc-post',
    component: ScPostComponent
  },
  {
    path: 'app-sc-user',
    component: ScUserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
