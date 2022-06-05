import {Directive} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {weightValidator} from "../validators/weight.validator";

@Directive({
  selector: '[weightValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: WeightDirective,
    multi: true
  }]
})
export class WeightDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return weightValidator()(control);
  }

}
