import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/user-interface';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(m => this.users = m);
  }

}
