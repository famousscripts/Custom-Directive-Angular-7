import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeContent]'
})
export class ChangeContentDirective {

  constructor(element: ElementRef) {
     //console.log(element);
      element.nativeElement.innerText = "The Content is added in main title ";
   }

}
