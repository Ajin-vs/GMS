import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnit]'
})
export class UnitDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent): void {
    const inputValue = this.el.nativeElement.value;

    // Allow only numbers and one decimal point
    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');

    // Update the input value
    this.el.nativeElement.value = sanitizedValue;
  }

}
