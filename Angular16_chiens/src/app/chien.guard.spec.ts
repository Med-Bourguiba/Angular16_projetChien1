import { TestBed } from '@angular/core/testing';

import { ChienGuard } from './chien.guard';

describe('ChienGuard', () => {
  let guard: ChienGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChienGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
