import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private readonly portals: Map<string, ViewContainerRef> = new Map();
  
  public addHost(token: string, host: ViewContainerRef): void {
    this.portals.set(token, host);
  }

  public addGuest(token: string, guest: TemplateRef<unknown>): void {
    this.portals.get(token)?.createEmbeddedView(guest);
  }

  public removeGuest(token: string): void {
    this.portals.get(token)?.clear();
  }
}
