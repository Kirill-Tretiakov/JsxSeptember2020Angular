import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {PostTitleComponent} from './components/post-title/post-title.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, PostTitleComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
