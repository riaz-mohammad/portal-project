import { trigger, transition, style, animate, keyframes } from '@angular/animations';


export const notificationAnimation = trigger('notificationAnimation', [
  transition(':enter', [
    style({
      transform: 'translateX(100%)',
    }),

    animate(
      '300ms ease',
      keyframes([
        style({transform: 'translateX(0%)', offset: '1'})
      ])
    ),
  ]),

  transition(':leave', [
    animate('500ms ease', keyframes([
      style({transform: 'translateX(-10%)', offset: '0.5'}),
      style({transform: 'translateX(100%)', offset: '1'})
    ])),
  ]),
]);