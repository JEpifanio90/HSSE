import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { IUser } from 'src/app/shared/models/user.interface';
import { ISideBarMenu } from 'src/app/shared/models/sidebar-menu.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { SessionService } from 'src/app/shared/services/session.service';


@Component({
  selector: 'hsse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public currentUser: IUser = this.sessionService.currentUser;
  public sidenavAction = 'side';
  public menuOptions: Array<ISideBarMenu> = HSSEConstants.SIDE_MENU;

  constructor(
    private mediaObserver: MediaObserver,
    private router: Router,
    private sidenavMngr: SidenavService,
    private sessionService: SessionService
  ) {
    this.setUpMediaListener();
  }

  ngOnInit(): void {
    this.sidenavMngr.sidenav = this.sidenav;
    this.router.events.subscribe(() => this.sidenav.toggle() );
  }

  private setUpMediaListener(): void {
    this.mediaObserver.media$.subscribe((mediaQuery: MediaChange) => {
      this.sidenavAction = (mediaQuery.suffix.match(/(Xs|Sm)/g)) ? 'over' : 'side';
    });
  }
}
