import { Injectable } from '@angular/core';
import { RunNumberService } from './run-number.service';

@Injectable({
	providedIn: 'root',
})
export class CordovaService {

	constructor(private runNumberService: RunNumberService) {
		document.addEventListener('deviceready', () => {
			if (!PushNotification) {
				console.warn('PushNotification global not available');
			} else {
				const push = (<any>PushNotification).init({
					android: {
						forceShow: true,
					},
					ios: {
						alert: true,
						clearBadge: true,
					},
				});
				push.on('registration', (data) => {
					console.log('registration suceeded', data.registrationId);
					runNumberService.updateWakeupFunction(function fakeCall() {
						console.log('haha', data.registrationId);
					}, device.uuid)
						.then((update) => {
							console.log('updated wakeup func', update);
						});

				});

				push.on('notification', (data) => {
					console.log('received notification', data);
				});
			}
		}, false);
	}
}
