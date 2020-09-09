import { TestBed, async, inject } from '@angular/core/testing';

import { AenderungenSpeichernGuard } from './aenderungen-speichern.guard';

describe('AenderungenSpeichernGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AenderungenSpeichernGuard]
    });
  });

  it('should ...', inject([AenderungenSpeichernGuard], (guard: AenderungenSpeichernGuard) => {
    expect(guard).toBeTruthy();
  }));
});
