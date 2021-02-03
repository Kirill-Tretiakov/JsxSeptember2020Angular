import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces/post-interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {
  @Input() post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToPost(): void {
    this.router.navigate([this.post.id], {
      relativeTo: this.activatedRoute,
      state: this.post
    });
  }
}
