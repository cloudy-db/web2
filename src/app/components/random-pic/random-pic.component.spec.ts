import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPicComponent } from './random-pic.component';

describe('RandomPicComponent', () => {
	let component: RandomPicComponent;
	let fixture: ComponentFixture<RandomPicComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RandomPicComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RandomPicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
