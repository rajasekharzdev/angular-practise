import { TestBed } from '@angular/core/testing';

import { ServicePractiseService } from './service-practise.service';

describe('ServicePractiseService', () => {
  let service: ServicePractiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePractiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
