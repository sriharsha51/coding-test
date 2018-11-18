import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'address'
})

export class AddressPipe implements PipeTransform {

    transform(address): any {
        let combineAddress = '';
       for (const key in address) {
           if (address.hasOwnProperty(key)) {
              combineAddress += (address[key] + ' ');       
           }
       }
       return combineAddress;
    };
}
