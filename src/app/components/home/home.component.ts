import { Component, OnInit } from '@angular/core';
import { RunNumberService } from '../../run-number.service';
import { map, tap } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	buddies$;
	dashboard$;
	today$;
	latestCurrency = 'HKD';

	constructor(private runNumberService: RunNumberService) {}

	ngOnInit() {
		this.buddies$ = this.runNumberService.summary$;
		// this.latestCurrency

		this.dashboard$ = this.runNumberService.dashboard$;
		this.today$ = this.runNumberService.today$;
	}

}
