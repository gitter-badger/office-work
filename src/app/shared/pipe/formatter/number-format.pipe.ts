import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return String(value).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');;
  }

}
