import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';
import { MemberCrudComponent } from './member-crud/member-crud.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberComponent,
    MemberCrudComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class MemberModule {

 }
