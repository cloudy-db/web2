import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RunNumberService, Bill } from '../../run-number.service';
import * as moment from 'moment';

interface BillTimestr extends Bill {
	time: any;
}

@Component({
	selector: 'app-activity-edit',
	templateUrl: './activity-edit.component.html',
	styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent implements OnInit, OnDestroy {
	subscriptions: Subscription = new Subscription();
	activityId: string;
	activity: FormGroup;
	isProcessing = true;

	constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private runNumberService: RunNumberService) {}

	ngOnInit() {
		this.activity = this.fb.group({
			amount: '',
			currency: '',
			name: '',
			comment: '',
			time: new Date(),
			_id: '',
		});

		this.subscriptions.add(this.route.params.subscribe(params => {
			this.activityId = params.activityId;

			if (this.activityId) {
				this.runNumberService
					.get(params.activityId)
					.then((bill: any) => {
						bill.time = moment(bill.time).local().format(moment.HTML5_FMT.DATETIME_LOCAL_MS);
						this.activity.setValue(bill);
						this.isProcessing = false;
					});
			} else {
				this.isProcessing = false;
			}
		}));
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

	async addBill() {
		this.isProcessing = true;
		console.log('created bill', this.activity.value);
		try {
			await this.runNumberService.addBill(this.activity.value);
			this.router.navigate(['/activities']);
		} catch (e) {
			console.error('Error while adding bill', e);
			alert('An error occured. Please retry');
		}
		this.isProcessing = false;
	}

	async delete() {
		this.isProcessing = true;
		try {
			await this.runNumberService.del(this.activityId);
			this.router.navigate(['/activities']);
		} catch (e) {
			console.error('Error while deleting bill', e);
			alert('An error occured. Please retry');
		}
		this.isProcessing = false;
	}
}
