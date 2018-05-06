import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RunNumberService } from '../../run-number.service';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

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

	constructor(private runNumberService: RunNumberService, private cdRef: ChangeDetectorRef) {}

	ngOnInit() {
		this.runNumberService.activities$.subscribe((arr) => {
			this.bills = arr;
			this.cdRef.detectChanges();
		});
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

	protected updateBills(bills) {
		this.bills = bills;
	}

}
