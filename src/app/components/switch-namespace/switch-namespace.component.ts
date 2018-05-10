import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

	constructor(private modalService: NgbModal) { }

	showQrCode(namespace) {
		this.activeNamespace = namespace;
		this.modalService.open(this.qrModalTpl);
	}

	addNamespace(namespace) {
		this.namespaces.push(namespace);
	}

}
