import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationServicesService } from 'src/app/shared/services/notification-services.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  modalItem: string;
  notification = {
    title: '',
    message: ''
  };
 
  @Output()
   delEvent = new EventEmitter();
  subscription: Subscription;
  constructor(private noteSvc: NotificationServicesService) { }

  ngOnInit() {
    this.subscription = this.noteSvc.getNotification()
    .subscribe(notification => {
      this.notification = notification;
    });
  }
  deleteItem() {
    this.delEvent.emit();
  }

}
