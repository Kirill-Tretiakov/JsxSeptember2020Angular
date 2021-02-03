import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user-interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-title',
  templateUrl: './user-title.component.html',
  styleUrls: ['./user-title.component.css']
})
export class UserTitleComponent implements OnInit {
  @Input() user: User;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToUser(): void {
    this.router.navigate([this.user.id],{
      relativeTo: this.activatedRoute,
      state: this.user
    });
  }
  goToPost(): void{

  }
}
