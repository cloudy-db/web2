import { Component } from '@angular/core';
import { NavCurrentService } from '../nav-current.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

	constructor(private navCurrent: NavCurrentService) {}

}
