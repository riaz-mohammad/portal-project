import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'third-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }
  public home(): void {
    console.log('%cFrom Home component', 'color:yellow;font-weight:bold')
    this.notificationService.showNotification({show: true, message: 'From Home Component'});
  }
  ngOnInit(): void {
  }

}
