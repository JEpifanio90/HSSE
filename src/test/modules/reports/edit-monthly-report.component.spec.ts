import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonthlyReportComponent } from '../../../app/modules/home/reports/edit/edit-monthly-report.component';

describe('EditMonthlyReportComponent', () => {
  let component: EditMonthlyReportComponent;
  let fixture: ComponentFixture<EditMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
