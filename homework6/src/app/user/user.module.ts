import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {UserTitleComponent} from './components/user-title/user-title.component';
import {UsersComponent} from './components/users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, UserTitleComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService]
})
export class UserModule { }
