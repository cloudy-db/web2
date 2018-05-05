import { Injectable } from '@angular/core';
import { RunNumberStreamify } from 'cloudy';
import { BehaviorSubject, Observable } from 'rxjs';
import { publishBehavior, filter, switchAll, multicast, map, refCount } from 'rxjs/operators';

@Injectable()
export class RunNumberService {
	runNumber$: Observable<any> = new BehaviorSubject(undefined);
	activities$: Observable<any>;

	constructor() {
		this.runNumber$ = new Observable((observer) => {
			RunNumberStreamify.create({
					namespace: 'testing',
				}).then((runNumber) => {
					observer.next(runNumber);
				});
			}).pipe(
				multicast(BehaviorSubject.create()),
				refCount()
			);

		this.activities$ = this.runNumber$
							.pipe(
								filter((val) => val),
								map((rns) => rns.activities),
								switchAll(),
								publishBehavior([]),
								refCount()
							);
	}

}
