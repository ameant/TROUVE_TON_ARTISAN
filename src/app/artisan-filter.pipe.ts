import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artisanFilter'
})
export class ArtisanFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
