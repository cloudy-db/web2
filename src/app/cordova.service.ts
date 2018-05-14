import { Injectable, NgZone, Injector } from '@angular/core';
import { RunNumberService } from './run-number.service';

@Injectable({
	providedIn: 'root',
})
export class CordovaService {
	runNumberService: RunNumberService;

	constructor(private ngZone: NgZone, private injector: Injector) {
		const that = this;

		document.addEventListener('deviceready', function deviceReadyHandler() {
			if (!PushNotification) {
				console.warn('PushNotification global not available');
			} else {
				const push = (<any>PushNotification).init({
					android: {
					},
					ios: {
						alert: true,
						clearBadge: true,
					},
				});
				push.on('registration', function pushRegistrationHandler(data) {
					console.log('registration suceeded', data.registrationId);

					that._getRunNumberService().updateWakeupFunction(function fakeCall() {
						console.log('haha', data.registrationId);
					}, device.uuid)
						.then((update) => {
							console.log('updated wakeup func', update);
						});

				});

				push.on('notification', async function pushDataHandler(data) {
					console.log('received notification', data);
					await that._getRunNumberService().addBill({amount: 12345, currency: 'TST', time: new Date(), name: 'Isaac', comment: 'Cool'});
				});

				push.on('error', function pushErrorHandler(e) {
					console.error('Error in push', e);
					alert('There are issues with Push Notifications. Expect degraded experience.');
				});
			}
		}, false);
	}

	_getRunNumberService(): RunNumberService {
		if (this.runNumberService) {
			return this.runNumberService;
		} else {
			return this.runNumberService = this.injector.get(RunNumberService);
		}
	}
}
