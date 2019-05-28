import { TestBed, async } from '@angular/core/testing';

import { HttpIntercepterBasicAuthService } from './http-intercepter-basic-auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpIntercepterBasicAuthService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: HttpIntercepterBasicAuthService = TestBed.get(HttpIntercepterBasicAuthService);
    expect(service).toBeTruthy();
  });
});
