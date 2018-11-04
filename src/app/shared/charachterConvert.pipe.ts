import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'characterConvert'
})
export class CharacterConvert implements PipeTransform {
  transform(value: string, character: string, input: string): string {
    return value.replace(character, input);
  }
 }
