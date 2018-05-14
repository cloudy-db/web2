import { Component, OnInit, OnDestroy } from '@angular/core';
import { RunNumberService } from '../../run-number.service';
import { map, filter } from 'rxjs/operators';
import { Subscription } from '@angular-devkit/core/node_modules/rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
	buddies$;
	dashboard$;
	today$;
	latestCurrency;
	subscription = new Subscription();

	constructor(private runNumberService: RunNumberService) {}

	ngOnInit() {
		this.buddies$ = this.runNumberService.summary$;
		this.dashboard$ = this.runNumberService.dashboard$;
		this.today$ = this.runNumberService.today$;
		this.subscription.add(this.runNumberService.activities$.
			pipe(
				filter((activities) => activities.length > 0),
				map((activities) => {
					return activities.filter((activity) => (activity.time <= new Date()));
				})
			).subscribe((activities) => {
				if (activities[0] && activities[0].currency) {
					this.latestCurrency = activities[0].currency;
				}
			}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
