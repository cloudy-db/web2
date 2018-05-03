import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';
import { BillNewComponent } from './components/bill-new/bill-new.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ActivityListComponent,
		ActivityEditComponent,
		BillNewComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
