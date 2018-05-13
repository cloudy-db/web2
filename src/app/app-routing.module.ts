import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';
import { BillNewComponent } from './components/bill-new/bill-new.component';
import { SwitchNamespaceComponent } from './components/switch-namespace/switch-namespace.component';
import { SettleUpComponent } from './components/settle-up/settle-up.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'namespaces', component: SwitchNamespaceComponent },
	{ path: 'activities', component: ActivityListComponent },
	{ path: 'new', component: ActivityEditComponent },
	{ path: 'activities/:activityId', component: ActivityEditComponent },
	{ path: 'settle-up', component: SettleUpComponent },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
