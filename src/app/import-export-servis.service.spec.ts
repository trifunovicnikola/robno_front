import { TestBed } from '@angular/core/testing';

import { ImportExportServisService } from './import-export-servis.service';

describe('ImportExportServisService', () => {
  let service: ImportExportServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportExportServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
