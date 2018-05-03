import { TestBed, inject } from '@angular/core/testing';

import { RunNumberService } from './run-number.service';

describe('RunNumberService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [RunNumberService],
		});
	});

	it('should be created', inject([RunNumberService], (service: RunNumberService) => {
		expect(service).toBeTruthy();
	}));
});
