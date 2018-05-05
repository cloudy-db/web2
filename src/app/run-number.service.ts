import { Injectable } from '@angular/core';
import { Cloudy, RunNumber } from 'cloudy';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { multicast } from 'rxjs/operators';


@Injectable()
export class RunNumberService {
	runNumber$: BehaviorSubject<any> = new BehaviorSubject(undefined);

	constructor() {
		RunNumber.create({
			namespace: 'testing',
		}).then((runNumber) => {
			this.runNumber$.next(runNumber);
		});

		// this.activity = new Observable().multicast(BehaviorSubject.create()).refCount();
	}

}
