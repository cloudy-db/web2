import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CordovaService {

	constructor() {
		document.addEventListener('deviceready', () => {
			console.log('Great! Cordova emitted deviceready');
		}, false);
	}
}
