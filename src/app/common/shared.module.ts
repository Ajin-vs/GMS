import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericOnlyDirective } from './directives/numeric-only.directive';
import { UnitDirective } from './directives/unit.directive';



@NgModule({
  declarations: [
    NumericOnlyDirective,
    UnitDirective
  ],
  exports: [NumericOnlyDirective,UnitDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
