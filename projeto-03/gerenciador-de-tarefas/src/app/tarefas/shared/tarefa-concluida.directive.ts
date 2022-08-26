import { Directive, ElementRef, Input, OnInit } from '@angular/core';

//diretivas cria atributos no html

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  
  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }
}
