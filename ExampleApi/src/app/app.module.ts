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



@NgModule({
  declarations: [
    AppComponent,
    ScPostComponent,
    PostListItemComponent,
    ScUserComponent,
    UserListItemComponent
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
