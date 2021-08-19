import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[backgroundColor]'
})
export class BackgroudColorDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = 'green'
  }
}
