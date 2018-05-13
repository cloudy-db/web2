import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-settle-up-transaction',
	templateUrl: './settle-up-transaction.component.html',
	styleUrls: ['./settle-up-transaction.component.scss'],
})
export class SettleUpTransactionComponent {
	@Input()
	person1: string;

	@Input()
	person2: string;

	@Input()
	currency: string;

	@Input()
	amount: number;

	done = false;

	toggleDone() {
		this.done = !this.done;
	}

}
