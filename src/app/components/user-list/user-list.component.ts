import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/user';
import { ChatService } from 'src/app/shared/services/chat.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[];

  constructor(chat: ChatService) {
    // chat.getUsers().subscribe(users => {
    //   this.users = users;
    // });
  }
}