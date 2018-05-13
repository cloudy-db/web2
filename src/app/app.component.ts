import { Component } from '@angular/core';
import { CordovaService } from './cordova.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'app';
	constructor(protected cordovaService: CordovaService) {}
}
