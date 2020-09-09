import { TestBed } from '@angular/core/testing';

import { FakultaetService } from './fakultaet.service';

describe('FakultaetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakultaetService = TestBed.get(FakultaetService);
    expect(service).toBeTruthy();
  });
});
