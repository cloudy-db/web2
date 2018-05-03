import { Component, Input, OnChanges } from '@angular/core';
import * as randomColor from 'randomcolor';

@Component({
	selector: 'app-name-with-background',
	templateUrl: './name-with-background.component.html',
	styleUrls: ['./name-with-background.component.scss'],
})
export class NameWithBackgroundComponent {
	@Input()
	background: string;

	@Input()
	name: string;

	constructor() {
		if (!this.background) {
			this.background = randomColor({luminosity: 'light'});
		}
	}

}
