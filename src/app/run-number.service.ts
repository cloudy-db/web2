import { Injectable } from '@angular/core';
import { RunNumberStreamify } from 'cloudy';
import { BehaviorSubject, Observable, ConnectableObservable } from 'rxjs';
import { publishBehavior, filter, switchAll, multicast, map, refCount, tap } from 'rxjs/operators';

@Injectable()
export class RunNumberService {
	runNumber$: Observable<any>;
	activities$: Observable<any>;

	constructor() {
		this.runNumber$ = new Observable((observer) => {
			console.debug('About to create RunNumberStreamify');
			RunNumberStreamify.create({
					namespace: 'testing',
				}).then((runNumber) => {
					console.debug('RunNumberStreamify instance', runNumber);
					observer.next(runNumber);
				});
		}).pipe(
			publishBehavior(undefined),
			refCount(),
		);


		this.activities$ = this.runNumber$
							.pipe(
								filter((val) => !!val),
								tap((rn) => console.log('filtered rn', rn)),
								map((rns) => rns.activities$),
								switchAll(),
								publishBehavior([]),
								refCount(),
							);
	}

}
