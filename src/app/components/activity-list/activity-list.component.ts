import { Component, OnInit, OnDestroy } from '@angular/core';
import { RunNumberService } from '../../run-number.service';
import { takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-activity-list',
	templateUrl: './activity-list.component.html',
	styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit, OnDestroy {
	private subscriptions = new Subscription();

	bills = [
		{amount: 12345, currency: 'USD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
		{amount: 12345, currency: 'HKD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
		{amount: 12345, currency: 'HKD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
	];

	constructor(private runNumberService: RunNumberService) {}

	ngOnInit() {
		this.subscriptions.add(this.runNumberService.activities$.subscribe((activities) => {this.bills = activities; }));
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

	protected updateBills(bills) {
		this.bills = bills;
	}

}
