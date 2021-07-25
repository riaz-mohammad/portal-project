import { Component, HostBinding, OnInit } from '@angular/core';
import { sidebarAnimation } from '../sidebar-animation';

@Component({
  selector: 'third-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [sidebarAnimation]
})
export class SidebarComponent {
  @HostBinding('@sidebarAnimation')
  private runAnimation = true;
}
