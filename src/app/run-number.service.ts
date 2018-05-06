import { Injectable, NgZone } from '@angular/core';
import { RunNumberStreamify } from 'cloudy';
import { BehaviorSubject, Observable, ConnectableObservable } from 'rxjs';
import { publishBehavior, filter, switchAll, multicast, map, refCount, tap } from 'rxjs/operators';
import { zonify } from './helpers/monkey-patch-stream';

@Injectable()
export class RunNumberService {
	runNumber$: ConnectableObservable<any>;
	activities$: Observable<any>;

	constructor(private ngZone: NgZone) {
		this.runNumber$ = <ConnectableObservable<any>>new Observable((observer) => {
			console.debug('About to create RunNumberStreamify');
			RunNumberStreamify.create({
				namespace: 'testing',
			}).then((runNumber) => {
				console.debug('RunNumberStreamify instance', runNumber);
				observer.next(runNumber);
			});
			return function finish() {
				console.warn('Please do not kill me (runNumber$: ConnectableObservable)...');
			};
		}).pipe(
			publishBehavior(undefined),
		);
		this.runNumber$.connect();

		this.activities$ = this.runNumber$
			.pipe(
				filter((val) => !!val),
				map((rns) => rns.activities$),
				switchAll(),
				zonify(this.ngZone),
				publishBehavior([]),
				refCount(),
			);

	}

}
