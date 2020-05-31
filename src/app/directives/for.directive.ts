import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[];

  @Input('myForUsando') texto: string;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log('MyFor');
  }

  ngOnInit(): void {
    console.log(this.numbers);
    console.log(this.texto);
    for (const number of this.numbers) {
      this.container.createEmbeddedView(
        this.template,  // template here will be what is where myFor (directive) was declared, in this case, a li tag
        { $implicit: number }); // when the loop run, there will be an implicit value, so this way is possible
      // to catch it and pass to where is being used
    }
  }
}
