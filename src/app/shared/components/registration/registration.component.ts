import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { IUser } from '../../models/user.interface';
import { ISite } from '../../models/site.interface';
import { SessionService } from '../../services/session.service';
import { LandingService } from 'src/app/core/http/landing/landing.service';
import { RequestService } from 'src/app/core/http/request.service';
import { UtilsService } from 'src/app/core/http/utils/utils.service';

@Component({
  selector: 'hsse-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public newUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.minLength(6)]),
    site: new FormControl('', Validators.required),
    contractor: new FormControl()
  });
  public sites: Array<ISite> = [];

  constructor(
    private landingService: LandingService,
    private snackBar: MatSnackBar,
    private sessionService: SessionService,
    private apiService: RequestService,
    private router: Router,
    private utilService: UtilsService
  ) {
    this.retrieveSites();
  }

  public createUser(): void {
    const newUser: IUser = this.newUserForm.getRawValue();
    this.landingService.createUser(newUser).subscribe(
      (createdUser: IUser) => {
        this.sessionService.currentUser = createdUser;
        this.apiService.addToken(createdUser.token);
        this.router.navigate(['home']);
      },
      (exception: string) => {
        this.snackBar.open(exception, 'OK', { duration: 2800 });
      }
    );
  }

  private retrieveSites(): void {
    const options  = [];
    this.utilService.getDataFor('sites').subscribe(
      (sitesList: Array<ISite>) => {
        for (const site of sitesList) {
          options.push({ name: site.name, value: site.id });
        }
        this.sites = sitesList;
        this.sessionService.sites = sitesList;
      },
      (exception: string) => {
        this.snackBar.open(exception, 'OK', { duration: 2800 });
      }
    );
  }
}
