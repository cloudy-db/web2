import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJoinNamespaceComponent } from './create-join-namespace.component';

describe('CreateJoinNamespaceComponent', () => {
	let component: CreateJoinNamespaceComponent;
	let fixture: ComponentFixture<CreateJoinNamespaceComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CreateJoinNamespaceComponent ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CreateJoinNamespaceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
