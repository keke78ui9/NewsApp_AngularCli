import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenHtml'
})
export class ShortenHtmlPipe implements PipeTransform {

    transform(value: string, args: number, endString: string) {
        let length = args || 100;
        let _endString = endString || "...";
        if (args !== undefined) {
            length = args;
        }
        var parser = new DOMParser(),
        doc = parser.parseFromString(value, "text/html");

        if (Array.from(doc.body.childNodes).some(node => node.nodeType === 1)) {
            // is html
            value = doc.getElementsByTagName("p")[0].textContent;
        }

        let resValue;

        if (value.length > length) {
            resValue = value.substring(0, args);
        }
        else {
            resValue = value;
        }

        return resValue + _endString;
    }
}