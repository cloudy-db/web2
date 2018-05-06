import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-activity-edit',
	templateUrl: './activity-edit.component.html',
	styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent implements OnInit, OnDestroy {
	subscriptions: Subscription = new Subscription();
	activityId: string;
	activity: FormGroup;

	constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {}

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

	addBill() {
		console.log(this.activity.value);
	}
}
