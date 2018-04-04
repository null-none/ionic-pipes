import { Pipe,PipeTransform } from "angular2/core";

@Pipe({
    name: 'searchPipe',
    pure: false
})
export class SearchPipe implements PipeTransform {
    public transform(value, key: string, term: string) {
        return value.filter((item) => {
            if (item.hasOwnProperty(key)) {
                if (term.length > 0) {
                    let regExp = new RegExp('\\b' + term, 'gi');
                    return regExp.test(item[key]);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        });
    }
}