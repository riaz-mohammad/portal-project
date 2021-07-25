import { trigger, transition, style, animate } from '@angular/animations';

export const sidebarAnimation = trigger('sidebarAnimation', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)'
    }),

    animate('300ms ease', style({
      transform: 'translateX(0%)'
    }))
  ]),
  
  transition(':leave', [
    animate('300ms ease', style({
      transform: 'translateX(-100%)'
    }))
  ])
]);