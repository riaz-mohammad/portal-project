import { Component, HostBinding, OnInit } from '@angular/core';
import { notificationAnimation } from './../notification-animation';

@Component({
  selector: 'third-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [notificationAnimation],
})
export class NotificationComponent implements OnInit {
  @HostBinding('@notificationAnimation')
  runAnimation = true;
  constructor() {}

  ngOnInit(): void {}
}
