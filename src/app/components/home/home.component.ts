import { Component, OnInit, OnDestroy } from '@angular/core';
import { RunNumberService } from '../../run-number.service';
import { map, filter } from 'rxjs/operators';
import { Subscription } from '@angular-devkit/core/node_modules/rxjs';
import { NavCurrentService } from '../../nav-current.service';

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
	haveActivity = false;
	subscription = new Subscription();

	constructor(private runNumberService: RunNumberService, private navCurrent: NavCurrentService) {}

	ngOnInit() {
		this.navCurrent.next('RunNumber');

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

		this.subscription.add(this.runNumberService.activities$
			.subscribe((activities) => {
				this.haveActivity = activities.length !== 0;
			}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
