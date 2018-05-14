import { Component } from '@angular/core';
import { NavCurrentService } from '../nav-current.service';
import { RunNumberService } from '../run-number.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	degraded$: Observable<boolean>;

	constructor(protected navCurrent: NavCurrentService, private runNumberService: RunNumberService) {
		this.degraded$ = runNumberService.degraded$;
	}

}
