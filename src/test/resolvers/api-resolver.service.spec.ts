import { TestBed } from '@angular/core/testing';

import { ApiResolverService } from '../../app/core/resolvers/api-resolver.service';

describe('ApiResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiResolverService = TestBed.get(ApiResolverService);
    expect(service).toBeTruthy();
  });
});
