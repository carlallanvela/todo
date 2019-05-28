import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }).compileComponents());

  it('should be created', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });
});
