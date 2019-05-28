import { TestBed } from '@angular/core/testing';

import { WelcomeDataService } from './welcome-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('WelcomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: WelcomeDataService = TestBed.get(WelcomeDataService);
    expect(service).toBeTruthy();
  });
});
