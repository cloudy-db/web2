import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'timeAgo2',
	pure: false,
})
export class TimeAgo2Pipe implements PipeTransform, OnDestroy {
	private timer: number;
	constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}
	transform(value: string) {
		this.removeTimer();

		const time = moment(value);
		if (!time.isValid()) {
			return '';
		}

		const timeToUpdate = this.getSecondsUntilUpdate(moment().diff(time, 'seconds')) * 1000;
		this.timer = this.ngZone.runOutsideAngular(() => {
			if (typeof window !== 'undefined') {
				return window.setTimeout(() => {
					this.ngZone.run(() => this.changeDetectorRef.markForCheck());
				}, timeToUpdate);
			}
			return null;
		});

		return time.fromNow();
	}
	ngOnDestroy(): void {
		this.removeTimer();
	}
	private removeTimer() {
		if (this.timer) {
			window.clearTimeout(this.timer);
			this.timer = null;
		}
	}
	private getSecondsUntilUpdate(seconds: number) {
		seconds = Math.abs(seconds);
		const min = 60;
		const hr = min * 60;
		const day = hr * 24;
		if (seconds < min) { // less than 1 min, update every 2 secs
			return 6;
		} else if (seconds < hr) { // less than an hour, update every 30 secs
			return 50;
		} else if (seconds < day) { // less then a day, update every 5 mins
			return 500;
		} else { // update every hour
			return 3600;
		}
	}
}
