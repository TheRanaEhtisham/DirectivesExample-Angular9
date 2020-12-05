import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {
  }

  // @Input('appClass') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }


  @Input('appClass') set className(classobj: any) {
    for (let key in classobj) {
      if (classobj[key]) {
        this.element.nativeElement.classList.add(key);
      }
      else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
