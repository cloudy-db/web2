import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExecSyncOptionsWithBufferEncoding } from 'child_process';
import { v4 as uuid } from 'uuid';
import { QRScanner, QRScannerStatus } from 'cordova-plugin-qrscanner';

@Component({
	selector: 'app-create-join-namespace',
	templateUrl: './create-join-namespace.component.html',
	styleUrls: ['./create-join-namespace.component.scss'],
})
export class CreateJoinNamespaceComponent {
	@ViewChild('createTpl')
	protected createRef: TemplateRef<any>;
	@ViewChild('joinTpl')
	protected joinRef: TemplateRef<any>;

	@Output()
	created = new EventEmitter<any>();

	@Output()
	joined = new EventEmitter<any>();

	hint1: string; hint2: string;
	namespace2: string;

	constructor(private modalService: NgbModal) {
	}

	reset() {
		this.hint1 = '';
		this.hint2 = '';
		this.namespace2 = '';

	}

	create() {
		this.modalService.open(this.createRef).result.then((reason: string) => {
			if (reason === 'submit') {
				this.created.emit({name: this.hint1, id: uuid()});
			}
			this.reset();
		}).catch(() => {});
	}

	join() {
		this.modalService.open(this.joinRef).result.then((reason: string) => {
			if (reason === 'submit') {
				this.joined.emit({name: this.hint2, id: this.namespace2});
			}
			this.reset();
		}).catch(() => {});
	}

	scan() {
		/*QRScanner.prepare(onDone); // show the prompt

		function onDone(err, status){
		  if (err) {
		   // here we can handle errors and clean up any loose ends.
		   console.error(err);
		  }
		  if (status.authorized) {

		  } else if (status.denied) {

		  } else {

		  }
		}*/
	}

}
