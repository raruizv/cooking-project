import { TestBed } from '@angular/core/testing';

import { CookSchoolService } from './cook-school.service';

describe('CookSchoolService', () => {
  let service: CookSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
