import { Component, OnInit, Input } from '@angular/core';
import { random } from 'lodash';

@Component({
	selector: 'app-random-pic',
	templateUrl: './random-pic.component.html',
	styleUrls: ['./random-pic.component.scss']
})
export class RandomPicComponent implements OnInit {
	link: string;
	@Input()
	class: string;

	constructor() { }

	ngOnInit() {
		this.link = `/assets/namespace-cover/${random(1, 10)}.jpg`;
	}

}
