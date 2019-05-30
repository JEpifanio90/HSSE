import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndicatorComponent } from '../../../app/modules/home/indicators/create/create-indicator.component';

describe('CreateIndicatorComponent', () => {
  let component: CreateIndicatorComponent;
  let fixture: ComponentFixture<CreateIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
