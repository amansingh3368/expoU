import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ChatMessage } from 'src/app/components/modals/chat-message.model';
import { AuthService } from './auth.service';




@Injectable()
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<ChatMessage[]>;
  chatMessage: ChatMessage;
  

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public afData: AuthService
    ) {
        this.afAuth.authState.subscribe(auth => {
          if (auth !== undefined && auth !== null) {
            this.user = auth;
          }

          // this.getUser().subscribe(a => {
          //   this.userName = a.displayName;
          // });
        });
    }

  // getUser() {
  //   const userId = this.user.uid;
  //   const path = `/users/${userId}`;
  //   return this.db.object(path);
  // }

  // getUsers() {
  //   const path = '/users';
  //   return this.db.list(path);
  // }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push([{
      message: msg,
      timeSent: timestamp,
      email: email }]);
  }

  getMessages(): AngularFireList<ChatMessage[]> {
    // query to create our message feed binding
    return this.db.list('/messages',ref=> {
      let q = ref.limitToLast(9).orderByKey();
      return q;
    });
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}