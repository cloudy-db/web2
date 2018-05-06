import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';
import { BillNewComponent } from './components/bill-new/bill-new.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'activities', component: ActivityListComponent },
	{ path: 'new', component: ActivityEditComponent },
	{ path: 'activities/:activityId', component: ActivityEditComponent },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
