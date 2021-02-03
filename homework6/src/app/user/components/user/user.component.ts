import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user-interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value =>
      this.user = this.router.getCurrentNavigation().extras.state as User);
  }

  ngOnInit(): void {
  }

}
