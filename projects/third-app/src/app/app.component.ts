import { NotificationService } from './notification.service';
import { Component } from '@angular/core';

@Component({
  selector: 'third-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'third-app';
  constructor(public notificationService: NotificationService){}
  public fromApp(): void {
    console.log('%cFrom App Component', 'color:yellow;font-weight:bold')
  }
}
