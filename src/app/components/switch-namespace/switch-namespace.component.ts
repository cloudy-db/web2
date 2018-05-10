import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RunNumberService } from '../../run-number.service';

@Component({
	selector: 'app-switch-namespace',
	templateUrl: './switch-namespace.component.html',
	styleUrls: ['./switch-namespace.component.scss'],
})
export class SwitchNamespaceComponent {
	namespaces = [
		{name: 'Japan 2018', 'id': 'testing'},
		{name: 'Tapei 2018', 'id': 'testing2'},
	];
	activeNamespace;
	@ViewChild('qrModal')
	private qrModalTpl: TemplateRef<any>;

	constructor(private modalService: NgbModal, private runNumberService: RunNumberService) { }

	showQrCode(namespace) {
		this.activeNamespace = namespace;
		this.modalService.open(this.qrModalTpl);
	}

	addNamespace(namespace) {
		this.namespaces.push(namespace);
	}

	async switchTo(event: Event, id: string) {
		const target = (<any>event.target);
		target.disabled = true;
		console.info('switching to', id);
		await this.runNumberService.switchTo(id);
		target.disabled = false;
	}

}
