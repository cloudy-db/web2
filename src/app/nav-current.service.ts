import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NavCurrentService extends BehaviorSubject<string> {
	constructor() {
		super('RunNumber');
	}
}
