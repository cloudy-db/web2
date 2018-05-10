import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';
import { BillNewComponent } from './components/bill-new/bill-new.component';
import { NameWithBackgroundComponent } from './helpers/name-with-background/name-with-background.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { Currency2 } from './helpers/currency2.pipe';
import { RunNumberService } from './run-number.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SwitchNamespaceComponent } from './components/switch-namespace/switch-namespace.component';
import { RandomPicComponent } from './components/random-pic/random-pic.component';
import { QRCodeModule } from 'angular2-qrcode';
import { CreateJoinNamespaceComponent } from './components/create-join-namespace/create-join-namespace.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ActivityListComponent,
		ActivityEditComponent,
		BillNewComponent,
		NameWithBackgroundComponent,
		TimeAgoPipe,
		Currency2,
		NavbarComponent,
		SwitchNamespaceComponent,
		RandomPicComponent,
		CreateJoinNamespaceComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		QRCodeModule,
		NgbModule.forRoot(),
	],
	providers: [
		RunNumberService,
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
