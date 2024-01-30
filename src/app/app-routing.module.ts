import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './common/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'member', loadChildren: () => import('./member/member.module').then(m => m.MemberModule) },
  {path:'configuration', loadChildren: ()=> import('./configuration/configuration.module').then(m => m.ConfigurationModule)},
  {path:'dashboard', component:DashboardComponent},
  // { path: '**', component: TestComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
