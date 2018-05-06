import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameWithBackgroundComponent } from './name-with-background.component';

describe('NameWithBackgroundComponent', () => {
	let component: NameWithBackgroundComponent;
	let fixture: ComponentFixture<NameWithBackgroundComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NameWithBackgroundComponent ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NameWithBackgroundComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
