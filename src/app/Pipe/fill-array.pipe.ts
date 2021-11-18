import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillArray'
})
export class FillArrayPipe implements PipeTransform {

  transform(value : number) {
    return (new Array(value).fill(1));
  }

}
