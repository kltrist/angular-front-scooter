
import { TestBed } from '@angular/core/testing';

import { ScooterService } from './scooter.service';
describe('ScooterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScooterService = TestBed.get(ScooterService);
    expect(service).toBeTruthy();
  });
});
