import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRange'
})
export class ToRangePipe implements PipeTransform {

  transform(value: number): number[]{
    return [...Array(value).keys()].map(i => i + 1)
  }

}
