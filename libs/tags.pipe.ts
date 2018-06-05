import {Injectable, Pipe, PipeTransform} from '@angular2/core';

@Pipe({
  name: 'tags'
})
@Injectable()
export class Tags implements PipeTransform {

  transform(value: string) {
    return value
      .split(/([#,@][A-Za-z0-9-_]{3,})/)
      .map((val: string) => {
        return {
          type: this.checkType(val),
          content: val
        };
      });
  }

  checkType(value) {
    if (value.startsWith('@') && value.length > 3) {
      return 'user-tag'
    } else if (value.startsWith('#') && value.length > 3) {
      return 'hash-tag'
    } else {
      return 'text'
    }
  }
}
