import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MembershipTypeComponent } from './membership-type/membership-type.component';

const routes: Routes = [
  {path:'', component:ConfigurationComponent, children:[{
    path:'membershipType', component: MembershipTypeComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
