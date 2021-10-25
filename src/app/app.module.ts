import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumesComponent } from './pages/albumes/albumes.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPostsComponent } from './shared/user-posts/user-posts.component';
import { UserAlbumsComponent } from './shared/user-albums/user-albums.component';
import { UserTodosComponent } from './shared/user-todos/user-todos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    AlbumesComponent,
    TodosComponent,
    ProfileComponent,
    FooterComponent,
    PostDetailComponent,
    AlbumDetailsComponent,
    TodoDetailsComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserPostsComponent,
    UserAlbumsComponent,
    UserTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
