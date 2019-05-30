import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: './modules/landing/landing.module#LandingModule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
