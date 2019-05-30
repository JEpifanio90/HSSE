import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMonthlyReportComponent } from '../../../app/modules/home/reports/show/show-monthly-report.component';

describe('ShowMonthlyReportComponent', () => {
  let component: ShowMonthlyReportComponent;
  let fixture: ComponentFixture<ShowMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
