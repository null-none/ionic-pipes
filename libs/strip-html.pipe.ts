import { Pipe,PipeTransform } from "angular2/core";

@Pipe({
  name: 'StripHTML'
})
export class StripHTML implements PipeTransform {

  transform(value, args) {
    let striped = value.replace(/(<([^>]+)>)/g, "");

    if (args != null) {
      if (args.split != null) {
        striped = striped.split(args.split);
        if (args.index != null) {
          striped = striped[args.index];
        }
      }
    }

    return striped;
  }
}