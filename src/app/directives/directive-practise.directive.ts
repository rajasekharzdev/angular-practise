import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivePractise]'
})
export class DirectivePractiseDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor  = 'red';
   }

}
