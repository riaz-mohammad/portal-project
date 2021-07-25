import { PortalService } from './portal.service';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[thirdPortalHost]'
})
export class PortalHostDirective {
  @Input('thirdPortalHost') set token(token: string) {
    this.portalService.addHost(token, this.viewContainer);
  }
  constructor(private viewContainer: ViewContainerRef,
              private portalService: PortalService) { }

}
