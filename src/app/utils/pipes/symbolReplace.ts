import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'symReplace'
})
export class SymbolReplace implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | undefined): SafeHtml {
    if (!value) {
      return '';
    }

    value = value
      .replace(/\[PENT\]/g, '<img  style="height: 24px;" src="/assets/pics/f6.webp">')
      .replace(/\[CIRCLE\]/g, '<img  style="height: 24px;" src="/assets/pics/f2.webp"/>')
      .replace(/\[TRI\]/g, '<img  style="height: 24px;" src="/assets/pics/f1.webp"/>')
      .replace(/\[SQUARE\]/g, '<img  style="height: 24px;" src="/assets/pics/f3.webp"/>');

    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
