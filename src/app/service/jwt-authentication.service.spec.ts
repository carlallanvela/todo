import { TestBed } from '@angular/core/testing';

import { JwtAuthenticationService } from './jwt-authentication.service';
import { HttpClientModule } from '@angular/common/http';

describe('JwtAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: JwtAuthenticationService = TestBed.get(JwtAuthenticationService);
    expect(service).toBeTruthy();
  });
});
