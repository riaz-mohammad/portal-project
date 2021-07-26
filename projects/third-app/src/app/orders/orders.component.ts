import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'third-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public order(): void {
    this.notificationService.showNotification({show: true, message: 'From Orders Component'})
    console.log('%cFrom Order Component', 'color:yellow;font-weight:bold');
  }
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

}
