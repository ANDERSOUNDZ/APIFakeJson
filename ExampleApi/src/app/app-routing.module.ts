import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScPostComponent } from './screens/sc-post/sc-post.component';
import { ScUserComponent } from './screens/sc-user/sc-user.component';
import { ScCommentComponent } from './screens/sc-comment/sc-comment.component';
import { ScAlbumComponent } from './screens/sc-album/sc-album.component';
import { ScPhotoComponent } from './screens/sc-photo/sc-photo.component';
import { ScToDoComponent } from './screens/sc-to-do/sc-to-do.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'app-sc-post',
    pathMatch: 'full'
  },
  {
    path: 'app-sc-post',
    component: ScPostComponent
  },
  {
    path: 'app-sc-user',
    component: ScUserComponent
  },
  {
    path: 'app-sc-comment',
    component: ScCommentComponent
  },
  {
    path: 'app-sc-album',
    component: ScAlbumComponent
  },
  {
    path: 'app-sc-photo',
    component: ScPhotoComponent
  },
  {
    path: 'app-sc-to-do',
    component: ScToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
