import { TestBed } from '@angular/core/testing';

import { EmblemproductService } from './emblem-product.service';

describe('EmblemproductService', () => {
  let service: EmblemproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmblemproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
