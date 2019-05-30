import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndicatorComponent } from '../../../app/modules/home/indicators/show/show-indicator.component';

describe('ShowIndicatorComponent', () => {
  let component: ShowIndicatorComponent;
  let fixture: ComponentFixture<ShowIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
