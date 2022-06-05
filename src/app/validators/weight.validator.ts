import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function weightValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log('Entrando na validação');

    const value = control.value;

    if (value == null) {
      // console.log('Recebi um control null');
      return null;
    }

    const onlyNumbers: boolean = /^[0-9]+$/.test(value);
    if (!onlyNumbers) {
      // console.log('Inválido pois nao tem apenas números');
      return {invalid: true};
    }

    const peso = parseInt(value);
    if (peso <= 0 || peso > 300) {
      // console.log('Invalido pois muito baixo ou muito alto');
      return {invalid: true};
    }

    // valid
    // console.log("Válido!");
    return null;
  }
}
