import { TestBed } from '@angular/core/testing';

import { GeraisService } from './gerais.service';

describe('GeraisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeraisService = TestBed.get(GeraisService);
    expect(service).toBeTruthy();
  });
});
