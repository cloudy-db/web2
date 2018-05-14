/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
	id: string;
}

declare module '@cloudy-db/js';
declare module 'cordova-plugin-qrscanner';
declare var device: any;
declare var PushNotification: any;

// declare var PushNotification: any;
