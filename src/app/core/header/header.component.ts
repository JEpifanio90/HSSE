import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidenavService } from 'src/app/shared/services/sidenav.service';

@Component({
  selector: 'hsse-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public loggedIn = false;

  constructor(private router: Router, private sidenavMngr: SidenavService) {
    this.listenRouteRedirection();
  }

  public sidebarToggle() {
    this.sidenavMngr.toggle();
  }

  public scrollTo(id: string): void {
    const el = document.getElementById(id);
    el.scrollIntoView();
  }

  private listenRouteRedirection(): void {
    let paths = [];
    let customTitle = '';
    this.router.events.subscribe((event) => {
      paths = [];
      customTitle = '';
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/') {
          this.loggedIn = false;
        } else {
          paths = event.urlAfterRedirects.split('/');
          paths.forEach(path => {
            if (path !== '') {
              path = path.charAt(0).toUpperCase() + path.slice(1);
              customTitle += (customTitle === '') ? path : ' / ' + path;
            }
          });
          this.loggedIn = true;
        }
      }
    });
  }
}
