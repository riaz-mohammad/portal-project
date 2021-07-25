import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'third-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  public readonly menuClick: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public menuClick$ = this.menuClick.asObservable();
  
  menuClicked(): void {
    this.menuClick.next(!(this.menuClick.value));
  }
  

}
