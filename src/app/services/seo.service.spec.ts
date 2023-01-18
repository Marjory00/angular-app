/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeoService } from './seo.service';

describe('Service: Seo', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
      providers: [SeoService]
    });
  });

  it('should be created', inject([SeoService], (service: SeoService) => {
    expect(service).toBeTruthy();
  }));
});
