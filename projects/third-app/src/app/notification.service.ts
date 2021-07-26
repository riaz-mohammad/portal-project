import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
interface Message {
  show: boolean;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _showNotification: BehaviorSubject<Message> = new BehaviorSubject<Message>({show: false, message: ''});
  public showNotification$: Observable<Message> = this._showNotification.asObservable();
  
  public showNotification(message: Message): void {
    this._showNotification.next(message);
    timer(1800).pipe(
      take(1),
      tap(_ => this._showNotification.next({show: false, message: ''}))
    ).subscribe();
  }
}
