import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
import { PortalService } from './portal.service';
import { Directive, Input, TemplateRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[thirdPortalGuest]'
})
export class PortalGuestDirective implements OnInit, OnDestroy{
  private token$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  @Input('thirdPortalGuest')
  get token(): string {
    return this.token$.value
  } 
  set token(token: string) {
    this.token$.next(token);
  }
  
  constructor(private templateRef: TemplateRef<unknown>,
              private portalService: PortalService) { }
  
  ngOnInit(): void {
    this.portalService.addGuest(this.token, this.templateRef);
  }
    
  ngOnDestroy(): void {
    this.portalService.removeGuest(this.token);
  }  
}
