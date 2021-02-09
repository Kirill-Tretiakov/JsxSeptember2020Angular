import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    element.nativeElement.style.background = 'yellow';
  }
  @HostListener('mouseover')
  change(): void {
    this.element.nativeElement.style.background = 'red';
  }
}
