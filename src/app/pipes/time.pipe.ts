import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const time = value.split(':');
      let hour = parseInt(time[0]);
      const min = time[1];
      let sign = 'am';
      if (hour > 12) {
        hour = hour - 12;
        sign = 'pm';
      }
      return `${hour.toString()}:${min} ${sign}`;
    } else {
      return 'time unknown';
    }
  }

}
