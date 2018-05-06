import { Injectable, NgZone } from '@angular/core';
import { RunNumberStreamify } from 'cloudy';
import { BehaviorSubject, Observable, ConnectableObservable } from 'rxjs';
import { publishBehavior, filter, switchAll, multicast, map, tap, first } from 'rxjs/operators';
import { zonify } from './helpers/monkey-patch-stream';

export interface Bill {
	amount: number;
	currency: string;
	time: Date;
	name: string;
	comment?: string;
	id?: string;
}

function getInstance(runNumber$: Observable<any>): Promise<any> {
	return new Promise((resolve, reject) => {
		runNumber$
			.pipe(
				filter((val) => !!val),
				first(),
			)
			.subscribe(
				(val) => resolve(val),
				(e) => reject(e),
			);
	});
}

@Injectable()
export class RunNumberService {
	runNumber$: BehaviorSubject<any> & ConnectableObservable<any>;
	activities$: Observable<any>;

	constructor(private ngZone: NgZone) {
		this.runNumber$ = <BehaviorSubject<any> & ConnectableObservable<any>>new Observable((observer) => {
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
			);
	}

	async addBill(bill: Bill): Promise<Bill> {
		return (await getInstance(this.runNumber$)).addBill(bill);
	}

	async get(key: string): Promise<Bill> {
		return (await getInstance(this.runNumber$)).get(key);
	}

	async del(key: string): Promise<Bill> {
		return (await getInstance(this.runNumber$)).del(key);
	}

}
