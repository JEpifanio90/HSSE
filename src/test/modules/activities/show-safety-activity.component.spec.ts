import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSafetyActivityComponent } from '../../../app/modules/home/activities/show/show-safety-activity.component';

describe('ShowSafetyActivityComponent', () => {
  let component: ShowSafetyActivityComponent;
  let fixture: ComponentFixture<ShowSafetyActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSafetyActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSafetyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
