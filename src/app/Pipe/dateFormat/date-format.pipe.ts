import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  CurrntMonth: string[] = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre", ];
  CurrntDay: string[] = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi" , "Samedi", "Dimanche"]

  returnFormat : string = ""

  transform(value: Date): string {
    this.returnFormat = this.CurrntDay[value.getDay()]+ " " + value.getDate() + " " + this.CurrntMonth[value.getMonth()] + " " + value.getFullYear()

    return this.returnFormat;
  }

}
