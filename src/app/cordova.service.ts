import { Injectable, NgZone, Injector } from '@angular/core';
import { RunNumberService } from './run-number.service';

@Injectable({
	providedIn: 'root',
})
export class CordovaService {
	runNumberService: RunNumberService;

	constructor(private ngZone: NgZone, private injector: Injector) {
		const that = this;

		ngZone.runOutsideAngular(() => {
			document.addEventListener('deviceready', function deviceReadyHandler() {
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
					push.on('registration', function pushRegistrationHandler(data) {
						console.log('registration suceeded', data.registrationId);

						that._getRunNumberService().updateWakeupFunction(function fakeCall() {
							console.log('haha', data.registrationId);
						}, device.uuid)
							.then((update) => {
								console.log('updated wakeup func', update);
							});

					});

					push.on('notification', function pushDataHandler(data) {
						console.log('received notification', data);
					});
				}
			}, false);
		});
	}

	_getRunNumberService() {
		if (this.runNumberService) {
			return this.runNumberService;
		} else {
			return this.runNumberService = this.injector.get(RunNumberService);
		}
	}
}
