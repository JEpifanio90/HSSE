import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSafetyActivityComponent } from '../../../app/modules/home/activities/create/create-safety-activity.component';

describe('CreateSafetyActivityComponent', () => {
  let component: CreateSafetyActivityComponent;
  let fixture: ComponentFixture<CreateSafetyActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSafetyActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSafetyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
