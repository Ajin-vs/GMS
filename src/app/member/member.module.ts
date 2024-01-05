import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';
import { MemberCrudComponent } from './member-crud/member-crud.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../common/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { FeesPopUpComponent } from './fees-pop-up/fees-pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    MemberListComponent,
    MemberComponent,
    MemberCrudComponent,
    FeesPopUpComponent,
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    SharedModule,
    MatCardModule, 
    MatButtonModule,
    MatTableModule,
    NgbModule,
    MatDialogModule
  ]
})
export class MemberModule {

 }
