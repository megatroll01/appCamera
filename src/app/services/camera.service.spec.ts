import { TestBed } from '@angular/core/testing';

import { cameraService } from './camera.service';

describe('cameraService', () => {
  let service: cameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
