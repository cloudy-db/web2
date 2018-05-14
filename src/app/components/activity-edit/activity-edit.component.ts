import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RunNumberService, Bill } from '../../run-number.service';
import * as moment from 'moment';
import { NavCurrentService } from '../../nav-current.service';

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

	constructor(
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private router: Router,
		private runNumberService: RunNumberService,
		private navCurrent: NavCurrentService
	) {}

	ngOnInit() {
		this.activity = this.fb.group({
			amount: ['', [Validators.required , Validators.pattern(/^\d+(?:\.\d{1,2})?$/)]],
			currency: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
			name: ['', Validators.required],
			comment: '',
			time: ['', Validators.required],
			_id: '',
		});

		this.navCurrent.next('Bill Edit/Create');

		this.subscriptions.add(this.route.params.subscribe(params => {
			this.activityId = params.activityId;

			if (this.activityId) {
				this.runNumberService
					.get(params.activityId)
					.then((bill: any) => {
						const bill2 = Object.assign(
							{},
							bill,
							{time: moment(bill.time).local().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)},
							{amount: bill.amount / 100},
						);
						this.activity.setValue(bill2);
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
		if (!this.activity.valid) {
			return alert('Please fill in all information');
		}
		this.isProcessing = true;
		console.log('created bill', this.activity.value);
		try {
			const bill = Object.assign({}, this.activity.value, {amount: this.activity.value.amount * 100});
			bill.time = new Date(bill.time);
			if (!isFinite(bill.time)) {
				bill.time = new Date();
			}
			await this.runNumberService.addBill(bill);
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
