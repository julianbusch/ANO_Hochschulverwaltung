import { TestBed, async, inject } from '@angular/core/testing';

import { AuthentifizierungGuard } from './authentifizierung.guard';

describe('AuthentifizierungGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentifizierungGuard]
    });
  });

  it('should ...', inject([AuthentifizierungGuard], (guard: AuthentifizierungGuard) => {
    expect(guard).toBeTruthy();
  }));
});
