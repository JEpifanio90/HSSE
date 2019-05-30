import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  public sidenav: MatSidenav;

  public open(): any {
    return this.sidenav.open();
  }


  public close(): any {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
