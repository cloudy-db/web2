import { Injectable, NgZone } from '@angular/core';
import { RunNumberStreamify } from '@cloudy-db/bundle';
import { ReplaySubject, Observable, ConnectableObservable, Subject } from 'rxjs';
import { filter, switchAll, multicast, map, tap, first, concat, bufferCount } from 'rxjs/operators';
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
	runNumber$ = new ReplaySubject<any>(1);
	activities$: Observable<any>;

	constructor(private ngZone: NgZone) {
		this.runNumber$
			.pipe(bufferCount(2, 1))
			.subscribe(([old]) => {
				old.stop().then(() => {
					console.log('stopped old OrbitDB instance');
				});
			});

		RunNumberStreamify.create({
			namespace: 'testing',
		}).then((runNumber) => {
			this.runNumber$.next(runNumber);
		});

		this.activities$ = this.runNumber$
			.pipe(
				tap((instance) => console.log('RNS instance', instance)),
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

	async switchTo(id: string) {
		const instance = await RunNumberStreamify.create({
			namespace: id,
		});
		this.runNumber$.next(instance);
	}

}
