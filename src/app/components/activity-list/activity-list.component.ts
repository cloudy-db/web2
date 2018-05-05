import { Component, OnInit } from '@angular/core';
import { RunNumberService } from '../../run-number.service';
import 'rxjs/add/operator/bufferCount';

@Component({
	selector: 'app-activity-list',
	templateUrl: './activity-list.component.html',
	styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
	bills = [
		{amount: 12345, currency: 'USD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
		{amount: 12345, currency: 'HKD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
		{amount: 12345, currency: 'HKD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
	];

	constructor(private runNumberService: RunNumberService) {}

	ngOnInit() {
		this.runNumberService.runNumber.bufferCount(2, 1).subscribe(([prev, curr]) => {
			if (prev && prev.off) {
				prev.removeListener('replicated', this.updateBills);
			}
			curr.on('replicated', this.updateBills)
		});
	}

	protected updateBills(bills) {
		this.bills = bills;
	}

}
