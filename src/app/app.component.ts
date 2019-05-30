import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationCancel, NavigationStart, NavigationError } from '@angular/router';

@Component({
  selector: 'hsse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showLoadingBar = true;

  constructor(private router: Router) {
    this.listenToRouteChanges();
  }

  private listenToRouteChanges(): void {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.showLoadingBar = true;
          break;

        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
          this.showLoadingBar = false;
          break;
      }
    });
  }
}
