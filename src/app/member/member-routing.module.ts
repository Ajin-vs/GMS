import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';
import { MemberCrudComponent } from './member-crud/member-crud.component';

const routes: Routes = [
  {
    path: '', component: MemberComponent, children: [
      { path: 'memberList', component: MemberListComponent },
      { path: 'memberAdd', component: MemberCrudComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
