import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MembershipTypeComponent } from './membership-type/membership-type.component';
import { MemeberShipListComponent } from './memeber-ship-list/memeber-ship-list.component';

const routes: Routes = [
  {path:'', component:ConfigurationComponent, children:[{
    path:'subscriptionType', component: MembershipTypeComponent
  },
  {
    path:'subscriptionList', component: MemeberShipListComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
