/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TechnologiesService } from './technologies.service';

describe('TechnologiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnologiesService]
    });
  });

  it('should ...', inject([TechnologiesService], (service: TechnologiesService) => {
    expect(service).toBeTruthy();
  }));
});
