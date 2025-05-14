import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroInt'
})
export class ZeroIntPipe implements PipeTransform {

  transform(value: number): string {
    return value <= 9 ? `0${value}`: value.toString();
  }
}
