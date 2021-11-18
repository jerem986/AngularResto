import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinChar( value : number) : ValidatorFn{
    return (control : AbstractControl) => {
        let myValue : string = control.value
        if(myValue == null) return null;
        if(control.dirty && myValue.length < value) return {TropCourt : `Le champ doit contenir minimum ${value} charactères`}
        return null
      }
}