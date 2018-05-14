import { TestBed, inject } from '@angular/core/testing';

import { NavCurrentService } from './nav-current.service';

describe('NavCurrentService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [NavCurrentService]
		});
	});

	it('should be created', inject([NavCurrentService], (service: NavCurrentService) => {
		expect(service).toBeTruthy();
	}));
});
