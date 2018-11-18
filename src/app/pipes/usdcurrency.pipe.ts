import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'usdcurrency'
})

export class USDCurrencyPipe implements PipeTransform {
    
    transform(amount): any {        
       amount = amount / 100;
       return amount;
    };
}
