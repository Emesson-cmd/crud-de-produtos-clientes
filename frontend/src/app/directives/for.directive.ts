import { TemplateRef } from '@angular/core';
import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
/**
 * Implementa o OnInit com a finalidade de:
 * OnInit é um ciclo de vida de inicialização.
 * Sempre que houver uma mudança, a diretiva é chamada.
 */
export class ForDirective implements OnInit {

  /**
   * Essa palavra depois de "myFor" ("Em"), é a que eu defini
   * no html. Todos os dados escritos depois de "em" no 
   * component.html serão capturado pelo Input
   * 
   * <li *myFor="let n em [1, 2, 3]]"></li>
   */

  @Input('myForEm') numbers: number[] = []

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  /*
   * Eu chamo esse método para inicialização
   */

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template,
        { $implicit : number });
    }
  }

}
