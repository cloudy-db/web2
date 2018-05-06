import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RunNumberService } from '../../run-number.service';

@Component({
	selector: 'app-activity-edit',
	templateUrl: './activity-edit.component.html',
	styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent implements OnInit, OnDestroy {
	subscriptions: Subscription = new Subscription();
	activityId: string;
	activity: FormGroup;
	isProcessing = false;

	constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private runNumberService: RunNumberService) {}

	ngOnInit() {
		this.activity = this.fb.group({
			amount: 0.00,
			currency: '',
			name: '',
			comment: '',
		});

		this.subscriptions.add(this.route.params.subscribe(params => {
			this.activityId = params.activityId;
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
	}
}
