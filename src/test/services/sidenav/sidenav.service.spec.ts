import { TestBed } from '@angular/core/testing';

import { SidenavService } from '../../../app/shared/services/sidenav.service';

describe('SidenavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidenavService = TestBed.get(SidenavService);
    expect(service).toBeTruthy();
  });
});
