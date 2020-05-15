import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../modals/chat-message.model';
import { ChatService } from 'src/app/shared/services/chat.service';
import { AngularFireObject, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: AngularFireList<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }

}