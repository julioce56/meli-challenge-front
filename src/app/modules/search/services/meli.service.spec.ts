import { TestBed } from '@angular/core/testing';

import { MeliService } from './meli.service';
import { HttpClientModule } from '@angular/common/http';

describe('MeliService', () => {
  let service: MeliService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        MeliService
      ]
    });
    service = TestBed.inject(MeliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
