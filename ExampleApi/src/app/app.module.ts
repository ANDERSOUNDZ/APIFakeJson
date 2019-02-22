import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/app/screens/material/material.module';
import { ScPostComponent } from './screens/sc-post/sc-post.component';
import { PostListItemComponent } from './screens/sc-post/post-list-item/post-list-item.component';
import { ScUserComponent } from './screens/sc-user/sc-user.component';
import { UserListItemComponent } from './screens/sc-user/user-list-item/user-list-item.component';

import { HttpClientModule } from '@angular/common/http';
import { ScCommentComponent } from './screens/sc-comment/sc-comment.component';
import { ComentListItemComponent } from './screens/sc-comment/coment-list-item/coment-list-item.component';
import { ScAlbumComponent } from './screens/sc-album/sc-album.component';
import { AlbumListItemComponent } from './screens/sc-album/album-list-item/album-list-item.component';
import { ScPhotoComponent } from './screens/sc-photo/sc-photo.component';
import { PhotoListItemComponent } from './screens/sc-photo/photo-list-item/photo-list-item.component';
import { ScToDoComponent } from './screens/sc-to-do/sc-to-do.component';
import { ToDoListItemComponent } from './screens/sc-to-do/to-do-list-item/to-do-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ScPostComponent,
    PostListItemComponent,
    ScUserComponent,
    UserListItemComponent,
    ScCommentComponent,
    ComentListItemComponent,
    ScAlbumComponent,
    AlbumListItemComponent,
    ScPhotoComponent,
    PhotoListItemComponent,
    ScToDoComponent,
    ToDoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
