import { PortalService } from './portal.service';
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[thirdPortalGuest]'
})
export class PortalGuestDirective {
  @Input('thirdPortalGuest')
    set token(token: string) {
       this.portalService.addGuest(token, this.templateRef)
  }
  
  constructor(private templateRef: TemplateRef<unknown>,
              private portalService: PortalService) { }
  
  
}
