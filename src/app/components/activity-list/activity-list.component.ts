import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-activity-list',
	templateUrl: './activity-list.component.html',
	styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
	bills = [
		{amount: 12345, currency: 'HKD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
		{amount: 12345, currency: 'HKD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
		{amount: 12345, currency: 'HKD', time: new Date('2018-01-01'), name: 'Isaac', comment: 'cool'},
	];

	constructor() { }

	ngOnInit() {
	}

}
