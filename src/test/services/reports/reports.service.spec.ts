import { TestBed } from '@angular/core/testing';

import { ReportsService } from '../../../app/core/http/reports/reports.service';

describe('ReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportsService = TestBed.get(ReportsService);
    expect(service).toBeTruthy();
  });
});
