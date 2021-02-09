import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDiscripson'
})
export class CutDiscripsonPipe implements PipeTransform {

  value: string;
  cutting: number;

  transform(value: string, ...args: number[]): unknown {
    this.cutting = args[0];
    if (this.cutting) {
      this.value = value.substring(0, this.cutting) + '...';
    }
    else {
      this.value = value.substring(0, 80) + '...';
    }
    return this.value;
  }
}
