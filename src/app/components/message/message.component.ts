import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../modals/chat-message.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: string;
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(private authService: AuthService) {
   
      this.ownEmail = this.authService.userData.email;
      this.isOwnMessage = this.ownEmail === this.userEmail;
    
  }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }
}