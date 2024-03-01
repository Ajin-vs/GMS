import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericOnlyDirective } from './directives/numeric-only.directive';
import { UnitDirective } from './directives/unit.directive';
import { TabComponent } from './tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    NumericOnlyDirective,
    UnitDirective,
    TabComponent
  ],
  exports: [NumericOnlyDirective,UnitDirective, TabComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class SharedModule { }
