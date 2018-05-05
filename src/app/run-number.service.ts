import { Injectable } from '@angular/core';
import { Cloudy, RunNumber } from 'cloudy';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RunNumberService {
	runNumber: BehaviorSubject<any> = new BehaviorSubject(undefined);

	constructor() {
		RunNumber.create({
			namespace: 'testing',
		}).then((runNumber) => {
			this.runNumber.next(runNumber);
		});
	}

}
