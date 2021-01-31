import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {PostsComponent} from './components/posts/posts.component';
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {PostResolveService} from './services/post-resolve.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]
  },
  {path: 'users', component: UsersComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FullPostComponent,
    PostsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
