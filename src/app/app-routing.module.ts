import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AlbumesComponent } from './pages/albumes/albumes.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: 'users', component:UsersComponent},
  {path: 'userDetails/:id', component: UserDetailsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'postDetails/:id', component: PostDetailComponent},
  {path: 'albumes', component: AlbumesComponent},
  {path: 'albumDetails/:id', component: AlbumDetailsComponent},
  {path: 'todos', component:TodosComponent},
  {path: 'todos/:id', component:TodoDetailsComponent},
  {path: 'profile', component: ProfileComponent},

  {path: '**', component: ProfileComponent},
  {path: '', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
