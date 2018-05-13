import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleUpTransactionComponent } from './settle-up-transaction.component';

describe('SettleUpTransactionComponent', () => {
	let component: SettleUpTransactionComponent;
	let fixture: ComponentFixture<SettleUpTransactionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SettleUpTransactionComponent ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SettleUpTransactionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
