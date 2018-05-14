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

					that._getRunNumberService()
						.updateWakeupFunction(generateWakeupFunction(data.registrationId), device.uuid)
							.then((update) => {
							console.log('updated wakeup func', update);
						});

				});

				push.on('notification', async function pushDataHandler(data) {
					console.log('received notification', data);
					console.log('This is mainly for logging actually, since at this pt Angular is awaken already');
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

function generateWakeupFunction(token): Function {
	function wakeAndroid() {
		return fetch('https://fcm.googleapis.com/fcm/send', {
			body: JSON.stringify({
				'to': '__TOKEN__',
				'time_to_live': 300,
				'priority': 'high',
				'data': {
					'type': 'wakeup4sync',
					'force-start': 1,
				},
			}),
			credentials: 'omit',
			headers: {
				'user-agent': 'Cloudy RunNumber',
				'content-type': 'application/json',
				'Authorization': 'key=AAAAxxuOnRI:APA91bFptNfDzETCvmhTiEuKKDgNPBdc99CiyRGv4RScfKV4EI_6v6jiTtnmdpkbaYI0bapwQz3y827ydwkU2-Sg4A-1jhcJ7VIl1kvMHkaoZ20VvMzRlORCpas-WDvFpFW0_0cns6_t',
			},
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors',
		}).then((res) => {
			if (!res.ok) {
				console.warn('failed waking up', res);
				throw new Error('Waking up Android device failed: ');
			}
			return res;
		});
	}

	const newFunc = wakeAndroid.toString().replace('__TOKEN__', token);
	return Function('return ' + newFunc)(); // https://stackoverflow.com/a/7781900/1348400
}
