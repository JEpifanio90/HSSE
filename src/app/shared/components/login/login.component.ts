import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { IUser } from '../../models/user.interface';
import { SessionService } from '../../services/session.service';
import { LandingService } from 'src/app/core/http/landing/landing.service';
import { RequestService } from 'src/app/core/http/request.service';

@Component({
  selector: 'hsse-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private landingService: LandingService,
    private snackBar: MatSnackBar,
    private sessionService: SessionService,
    private apiService: RequestService,
    private router: Router
  ) { }

  public sendCredentials(): void {
    this.landingService.authenticateUser(this.loginForm.getRawValue() as IUser).subscribe(
      (user: IUser) => {
        this.sessionService.currentUser = user;
        this.apiService.addToken(user.token);
        this.router.navigate(['home']);
      },
      (exception: string) => {
        this.snackBar.open(exception, 'OK', { duration: 2800 });
      }
    );
  }
}
