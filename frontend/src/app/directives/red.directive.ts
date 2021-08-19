import { Directive, ElementRef } from '@angular/core';

@Directive({
  /*
   Para mim poder utilizar a cor red em outros
   elementos, por exemplo, um parágrafo no html,
   eu devo usar o appRed, que é o seletor para
   essa função. 
   */
  selector: '[appRed]'
})
/*
No export é o que as outras classes que aplicam o
RedDirective vão receber. No caso, a classe que
importar RedDirective vai poder utilizar a cor
red no seu HTML/CSS.
*/
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red'
  }

}
