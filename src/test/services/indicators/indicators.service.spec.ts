import { TestBed } from '@angular/core/testing';

import { IndicatorsService } from '../../../app/core/http/indicators/indicators.service';

describe('IndicatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndicatorsService = TestBed.get(IndicatorsService);
    expect(service).toBeTruthy();
  });
});
