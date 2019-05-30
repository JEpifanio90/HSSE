import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMonthlyReportComponent } from '../../../app/modules/home/reports/create/create-monthly-report.component';

describe('CreateMonthlyReportComponent', () => {
  let component: CreateMonthlyReportComponent;
  let fixture: ComponentFixture<CreateMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
