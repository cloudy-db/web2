import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchNamespaceComponent } from './switch-namespace.component';

describe('SwitchNamespaceComponent', () => {
	let component: SwitchNamespaceComponent;
	let fixture: ComponentFixture<SwitchNamespaceComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SwitchNamespaceComponent ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SwitchNamespaceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
