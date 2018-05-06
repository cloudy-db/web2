import { Pipe, PipeTransform } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Pipe({name: 'currency2'})
export class Currency2 implements PipeTransform {
	transform(code: string): string {
		const translated = getCurrencySymbol(code, 'narrow');
		return translated === code ? code : code.substr(0, 2) + getCurrencySymbol(code, 'narrow');
	}
}
