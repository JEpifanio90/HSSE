import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule } from '@angular/material';

import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LoginModule } from 'src/app/shared/components/login/login.module';
import { RegistrationModule } from 'src/app/shared/components/registration/registration.module';
import { LandingService } from 'src/app/core/http/landing/landing.service';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    LandingRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    RegistrationModule
  ],
  providers: [LandingService],
  exports: [LandingComponent]
})
export class LandingModule { }
