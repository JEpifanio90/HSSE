import { TestBed } from '@angular/core/testing';

import { StatsResolverService } from '../../app/core/resolvers/stats-resolver.service';

describe('StatsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatsResolverService = TestBed.get(StatsResolverService);
    expect(service).toBeTruthy();
  });
});
