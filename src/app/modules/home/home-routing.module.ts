import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    // { path: 'reports', loadChildren: './incident-reports/incident-reports.module#IncidentReportsModule' },
    // { path: 'activities', loadChildren: './safety-activities/safety-activities.module#SafetyActivitiesModule' },
    { path: 'environmental/indicators', children: [
      { path: 'create', loadChildren: './indicators/create/create-indicator.module#CreateIndicatorModule'},
      { path: 'show', loadChildren: './indicators/show/show-indicator.module#ShowIndicatorModule'},
      { path: '', redirectTo: 'create', pathMatch: 'full' }
    ]},
    { path: 'incidents/reports', children: [
      { path: 'create', loadChildren: './incidents/create/create-report.module#CreateReportModule'},
      { path: 'show', loadChildren: './incidents/show/show-report.module#ShowReportModule'},
      { path: '', redirectTo: 'create', pathMatch: 'full' }
    ]},
    { path: 'monthly/reports', children: [
      { path: 'create', loadChildren: './reports/create/create-monthly-report.module#CreateMonthlyReportModule'},
      { path: 'show', loadChildren: './reports/show/show-monthly-report.module#ShowMonthlyReportModule'},
      { path: '', redirectTo: 'create', pathMatch: 'full' }
    ]},
    { path: 'community/activities', children: [
      { path: 'create', loadChildren: './activities/create/create-safety-activity.module#CreateSafetyActivityModule'},
      { path: 'show', loadChildren: './activities/show/show-safety-activity.module#ShowSafetyActivityModule'},
      { path: '', redirectTo: 'create', pathMatch: 'full' }
    ]},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class HomeRoutingModule { }
