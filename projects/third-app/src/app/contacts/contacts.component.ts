import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'third-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }
  public contact(): void {
    this.notificationService.showNotification({show: true, message: 'From Contacts Component'})
    console.log('%cFrom Contact Component', 'color:yellow;font-weight:bold');
  }
  ngOnInit(): void {
  }

}
